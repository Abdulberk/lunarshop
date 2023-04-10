import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import {emailVerificationTemplate} from '../templates/activationEmail';


const {OAuth2} = google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
    SENDER_EMAIL,
} = process.env;

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
);

export const sendEmail = async (to, url,subject, template) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: SENDER_EMAIL,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
            accessToken,


        }

    });

    const mailOptions = {
        from: SENDER_EMAIL,
        to,
        subject: subject,
        html :template(to,url),
        
    };

        try {
            const result = await smtpTransport.sendMail(mailOptions);
            return result;
        } catch (error) {

            return error;
            
        }

}



