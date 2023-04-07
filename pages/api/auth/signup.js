import nc from 'next-connect';
import {connectDB, disconnect} from '../../../utils/db';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../../../utils/emailVerification';
import {emailVerificationTemplate} from '../../../templates/activationEmail';


const handler = nc()

const validateEmail = (email) => {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegex)) {
        return true;
    }
    else {
        return false;

    }
}

const generateActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '1d'})
}





handler.post(async (req, res) => {

  
    try {

        await connectDB();



        const { name, email, password } = req.body;
        console.log(req.body)

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all fields" })
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ message: "Please enter a valid email" })
        }


        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await new User({
            name,
            email,
            password: hashedPassword
        }).save();

        const activationToken = generateActivationToken({id: newUser._id})
        const activationUrl = `${process.env.BASE_URL}/activate/${activationToken}`
        sendEmail(email, activationUrl, "Activate your account", emailVerificationTemplate)
        await disconnect();

        res.status(201).json({
            message: "Registration successful. Please check your email to activate your account"
        });




    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }


    

})

export default handler