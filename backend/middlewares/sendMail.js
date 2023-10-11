// import { createTransport } from "nodemailer";

// export const sendMail = async(text) => {


//     const transporter = createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD
//         },
//     });

//     await transporter.sendMail({
//         subject: "CONTACT REQUEST FROM PORTFOLIO",
//         to: process.env.MY_MAIL,
//         from: process.env.MY_MAIL,
//         text
//     });

// }



import nodemailer from "nodemailer"

export const sendMail = async ( message, name, email ) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: `${email}`,
                to:`admohit880082@gmail.com`,
                subject: `Portfolio contact from ${name}`,
                html: `${message}. Email of Sender is ${email}`,
            })
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}