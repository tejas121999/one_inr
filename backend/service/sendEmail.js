const nodemailer = require('nodemailer');


let sendEmailWithAttachment = (toEmail, data) => {


    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akshay.k.eklare@gmail.com',
            pass: 'ake.19.96@08'
        }
    })


    var mailOptions = {
        from: 'akshay.k.eklare@gmail.com',
        to: toEmail,
        subject: data.subject,
        text: data.text,
        attachments: data.attachments
    }

    const msg = mail.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log('Mail Send Successful')
        }
    })

    return { msg }
}


module.exports = {
    sendEmailWithAttachment: sendEmailWithAttachment
}