const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "User is required",
        unique: true
    },
    password: {
        type: String, 
        required: "Password is required", 
        validate: [
            input => input.length >= 8,
            "Password needs to be at least 8 characters"
        ]
    },
})