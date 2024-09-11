import nodemailer from 'nodemailer';


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // todo configure mail for usage

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const mailOption = {
            from: 'akashmahto@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === "Verify" ? "Verify your email" : "Reset your password", // Subject line
            html: "<b>Hello world?</b>", // html body
        }

        const mailResponse = await transporter.sendMail(mailOption)

        return mailResponse


    } catch (error: any) {
        throw new Error(error.message)
    }
}