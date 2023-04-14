import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import joi from "joi";
import { connectDB, disconnect } from "../../../utils/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";




dotenv.config();

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Sign in",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },

      async authorize(credentials, req) {
        let user = null;
        try {
          await connectDB();

          const email = credentials.email;
          const password = credentials.password;

          console.log(email, password);

          if (!email || !password) {
            throw new Error("Please provide an email and password.");
          }

          const { error } = loginSchema.validate({ email, password });
          if (error) {
            throw new Error(error.details[0].message);
          }

          user = await User.findOne({ email });



          if (!user) {
            throw new Error("Invalid email or password.");
          }

          const checkMatch = await bcrypt.compare(password, user.password);

          if (!checkMatch) {
            throw new Error("Invalid email or password.");
          }
        } catch (error) {
          console.error(error);
          throw new Error(error.message);
        } finally {
          await disconnect();
        }

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: "Iv1.2a94b24ea5010c98",
      clientSecret: "71ff167e340484f06b9e03ff73bb64e4e667f8cb",
    }),
  ],

  pages: {
    signIn: "/signin",
  },  
  

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
)

