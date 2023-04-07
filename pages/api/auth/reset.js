import nc from 'next-connect';
import {connectDB, disconnect} from '../../../utils/db';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


const handler = nc()

const decodeToken = async(token) => {

    const resetSecretKey = process.env.RESET_SECRET;
    const decoded = await jwt.verify(token, resetSecretKey);
    return decoded;

}


handler.post(async (req, res) => {
    const { token, password } = req.body;
  
    try {
      await connectDB();
  
      const decodedToken = await decodeToken(token);
      const user = await User.findById(decodedToken.id);
  
      if (!user) {
        return res.status(404).json({
          error: 'User not found!',
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const updatedUser = await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(user._id) },
        { password: hashedPassword }
      );
  
    
  
      await disconnect();

       res.status(200).json({ message: 'Password reset successful!' });
    } catch (error) {

      await disconnect();
      console.log(error.message);
       res.status(500).json({ error: error.message});

    }
  });


export default handler;
