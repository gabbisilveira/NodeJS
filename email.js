var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabbisilveiraaa@gmail.com',
    pass: 'tztj hnkd iwyp yyir'
  }
});

var mailOptions = {
  from: 'gabbisilveiraaa@gmail.com',
  to: 'gabbisilveiraaa@gmail.com',
  subject: 'AAAA Email using Node.js',
  text: 'That EZ easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});