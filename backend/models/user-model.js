const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// JWT

const JWT_SECRET_KEY = "USERSECRETKEY"
userSchema.methods.generateToken = function(){
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            JWT_SECRET_KEY,
            {
                expiresIn: "15d"
            }
        )
    } catch (error) {
        console.error(error)
    }
};

const User = new mongoose.model("User", userSchema)

module.exports = User;