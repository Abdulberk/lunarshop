import nc from 'next-connect';
import {connectDB, disconnect} from '../../../utils/db';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../../../utils/emailVerification';
import { resetMail } from '../../../templates/resetEmail';

const handler = nc()

const generateResetToken = async(id) => {
    const resetSecretKey = process.env.RESET_SECRET;
    const resetToken = await jwt.sign({
        id,
    }, resetSecretKey, {
        expiresIn: '1d'
        
    })
    return resetToken;


} 



handler.post (async (req, res) => {


    try {
        await connectDB();

        const {email} = req.body;
       const user = await User.findOne({email});

       if (!user) {
        return res.status(404).json({
            error: "This email does not exist !"
        })
       }

       
         const resetToken = await generateResetToken(user._id);

         const baseURL = process.env.BASE_URL;
         const url = `${baseURL}/auth/reset/${resetToken}`; 

         sendEmail(email, url, "Reset your password", resetMail)

           
            await disconnect();

            res.status(200).json({ message: "Success! Please check your email" })

    }
    catch (error) {
       
        res.status(500).json({error: error.message})
        
    }
    
    finally {
        await disconnect();
    }



})

export default handler;
