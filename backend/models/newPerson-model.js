const mongoose = require("mongoose");
const cron = require('node-cron');
const nodemailer = require('nodemailer');

const newPersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    }
});

const newPerson = mongoose.model("newPerson", newPersonSchema);

module.exports = newPerson;

//*************************************************** */

// Nodemailer transporter configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ashishsati.gehu@gmail.com',
//     pass: "password"
//   }
// });

// // Email options
// const mailOptions = {
//   from: 'ashishsati.gehu@gmail.com',
//   subject: 'Happy Birthday!',
//   text: 'Wishing you a fantastic birthday!'
// };

// cron.schedule('10 15 * * *', async () => {

//     const today = new Date();
//     const todayStr = `${today.getMonth() + 1}-${today.getDate()}`;
//     const users = await newPerson.find({ birthdate: todayStr });
  
//     users.forEach(user => {
//         mailOptions.to = user.email;
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log('Error sending email:', error);
//           } else {
//             console.log('Email sent:', info.response);
//           }
//         });
//     });

// });


//*************************************************** */

// cron scheduling

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'ashishsati.gehu@gmail.com',
//         pass: 'password',
//     }
// });

// function sendBirthdayWishes(name, email) {
//     const mailOptions = {
//         from: 'ashishsati.gehu@gmail.com',
//         to: email,
//         subject: 'Happy Birthday!',
//         text: `Dear ${name},\n\nHappy Birthday! 🎉🎂🎈\n\nBest wishes,\nGEHU`
//     };

//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.error('Error sending email:', error);
//         } else {
//             console.log('Email sent:', info.response);
//         }
//     });
// }

// cron.schedule('16 13 * * *', async () => {

//     const today = new Date();

//     const birthdays = await newPerson.find({
//         dateOfBirth: {
//             $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
//             $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
//         }
//     });

//     // Send birthday wishes for each person found
//     person.forEach(user => {
//         sendBirthdayWishes(user.name, user.email);
//     });
// });