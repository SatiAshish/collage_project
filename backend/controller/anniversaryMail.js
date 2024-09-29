const nodemailer = require("nodemailer");
const cron = require('node-cron');
const addAnniversary = require("../models/anniversary-model")


const anniversaryMail = async (req, res) =>{

    const transporter = await nodemailer.createTransport({
        service : "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "ashishsati27082002@gmail.com",
            pass: 'oxen ylok owwj iqbb'
        }
    });

    
    const sendEmail = async (name, email) => {
        try {
            await transporter.sendMail({
                from: 'ashishsati27082002@gmail.com',
                to: email,
                subject: 'Anniversary Greetings!',
                text: `Dear ${name},\n\n On this special day, \n we wish you a very happy Anniversary! 🎉🎂\n\nBest wishes,\ from \n\n Graphic Era Bhimtal`
            });
            console.log(`Anniversary email sent to ${name} at ${email}`);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    // Scheduleing mm hh
    cron.schedule('00 9 * * *', async () => {
        try {
            const today = new Date();
            const users = await addAnniversary.find({ date: { $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) } });
            users.forEach(async (user) => {
                await sendEmail(user.name, user.email);
            });
        } catch (error) {
            console.error('Error fetching users from database:', error);
        }
    });

    // res.status(200).json("success");
}

module.exports = { anniversaryMail };