import { NextFunction } from "express";
import nodemailer from "nodemailer";




const sendMail =  ({
  name,
  email,
  subject,
  message
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const mailOptions = {
    from: `${name} <${email}>`,
    to:`${process.env.EMAIL_ADDRESS}`,
    subject: `${email} sent you a message: ${subject}`,
    text: message,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASS}`,
    },
  });

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });

};
export default sendMail;
