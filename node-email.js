// Send an Email
// Now you are ready to send emails from your server.
// Use the username and password from your selected email provider to send an email. T
// his tutorial will show you how to use your Gmail account to send an email:


// The Nodemailer Module
// The Nodemailer module makes it easy to send emails from your computer.

// The Nodemailer module can be downloaded and installed using npm:

// C:\Users\Your Name>npm install nodemailer
// After you have downloaded the Nodemailer module, you can include the module in any application:


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohibulkhan15992@gmail.com',
    pass: 'xxxxxxxx'
  }
});

var mailOptions = {
  from: 'mohibulkhan15992@gmail.com',
  to: 'mohibulk@chetu.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});