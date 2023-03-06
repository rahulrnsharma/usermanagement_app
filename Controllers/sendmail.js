const nodemailer = require('nodemailer')
const sendmail = async(req,resp)=>{
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'camryn46@ethereal.email',
            pass: 'N8QZKDecxJbgyu5apd'
        },
      });
      let info = await transporter.sendMail({
        from: '"Rahul Sharma" <camryn46@ethereal.email>', // sender address
        to: "wrar9022@gmail.com, baz@example.com", // list of receivers
        subject: "Ram", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    rep.json(info)
}  

module.exports = sendmail