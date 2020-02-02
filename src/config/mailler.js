import nodeMailer from 'nodemailer';

let adminEmail = process.env.EMAIL_USERNAME;
let adminPassword = process.env.EMAIL_PASSWORD;
let adminHost = process.env.EMAIL_HOST;
let adminPort = process.env.EMAIL_PORT;

// Return Promise
let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: adminHost,
    port: adminPort,
    secure: false, // use SSL - TLS. TODO: Khi đẩy lên server thì sửa lại là TRUE
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })
  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  }
  return transporter.sendMail(options);
}

module.exports = sendMail;
