require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
});


const sendEmail = async (obj) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: obj.to ,
    subject: obj.subject ,
    html: obj.html ,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;