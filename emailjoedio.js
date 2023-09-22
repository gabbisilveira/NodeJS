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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'AAAA Email using Node.js',
  text: 'Bom dia! Gabriela Silveira - 2B senha:tztj hnkd iwyp yyir'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});