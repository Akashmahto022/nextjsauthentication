import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs'


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // todo configure mail for usage

        const hashToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType == "Verify") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 })
        } else if (emailType) { }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "8a7dc409cd3f29", // ❌❌
                pass: "d8428e7887d835" // ❌❌
            }
        });

        const mailOption = {
            from: 'akashmahto@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === "Verify" ? "Verify your email" : "Reset your password", // Subject line
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to ${emailType === "Verify" ? "verify your email" : "reset your password"} or copy and past the link below in your browser <br> ${process.env.DOMAIN}/verifyemail?token=${hashToken} </p>`, // html body
        }

        const mailResponse = await transport.sendMail(mailOption)

        return mailResponse


    } catch (error: any) {
        throw new Error(error.message)
    }
}