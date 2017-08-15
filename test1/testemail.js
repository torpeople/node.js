var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'henry.software@gmail.com',
    pass: 'haha'
  }
});

var mailOptions = {
  from: 'henry.software@gmail.com',
  to: 'hliu@toronto.ca',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});