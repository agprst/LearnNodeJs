var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agung.diabloic@gmail.com',
    pass: '21102312'
  }
});

var mailOptions = {
  from: 'wkwkland@gmailawdawfawd.com',
  to: 'agungofficial@gmail.com',
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