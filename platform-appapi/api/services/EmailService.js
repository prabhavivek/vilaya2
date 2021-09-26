const nodemailer = require('nodemailer'); 
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
    sendMail:async function(input){
      sails.log.info("@Service EmailService @Method sendMail",input);

      var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: { user: process.env.VILAYA2_MAIL_ID,pass: process.env.PASSWORD}
      }));
  
      var mailOptions = {
        from: process.env.VILAYA2_MAIL_ID,
        to: input.email_id,
        subject: input.subject, 
        html: input.html,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          sails.log.error(error);
        } else {
          sails.log.info('Email sent: ' + info.response);
        }
      });  
  }
}