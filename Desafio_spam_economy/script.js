// ---nodemailer
const nodemailer = require("nodemailer")
// ---función que recibe la lista de correos
function enviar(to, subject, text) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kikac26@gmail.com",
        pass: "xxxxxx",
      },
    })
    const mailOptions = {
      from: "kikac26@gmail.com",
      to,
      subject,
      text,
    }
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) console.log(err)
      if (data) console.log(data)
    })
  })
}
module.exports = enviar