const mongoose = require("mongoose");
const cron = require('node-cron');
const nodemailer = require('nodemailer');

const anniversarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const anniversary = mongoose.model("anniversary", anniversarySchema);

module.exports = anniversary;