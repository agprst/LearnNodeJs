var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wdwdwd@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'wkwkland@gmailawdawfawd.com',
  to: 'awdafawdadaw@gmail.com',
  subject: 'Senwdwd',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});