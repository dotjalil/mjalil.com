"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMailData(name, email, msg) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let receivedMail = await transporter.sendMail({
    from: '"Mo Jalil" <mo@mjalil.com>', // sender address
    to: "mo@mjalil.com", // list of receivers
    subject: "New contact form submission @ mjalil.com", // Subject line
    text: `From: ${name} at ${email} 
    Message: ${msg}`, // plain text body
  });

  // send mail with defined transport object
  let thankYouMail = await transporter.sendMail({
    from: '"Mo Jalil" <mo@mjalil.com>', // sender address
    to: email, // list of receivers
    subject: "Thank you for your message", // Subject line
    text: "We recieved your message and will get back to you soon!", // plain text body
  });

  console.log("Message sent: %s", receivedMail.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email || !body.msg) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: "Name, Email, and Message are required!" });
  }

  // Send emails
  sendMailData(body.name, body.email, body.msg).catch(console.error);

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `Thank you! We received your message!` });
}
