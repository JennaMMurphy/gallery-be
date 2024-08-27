import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jennasartwebsite@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });
  

const sendMail = ({name, email, subject, message}: {name: string, email: string, subject: string, message: string}) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'jennasartwebsite@gmail.com',
        subject,
        text: message
    };
    console.log(process.env.EMAIL_PASS)

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       throw error
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   }); 



}
export default sendMail
