const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({


    user_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})
const User = mongoose.model("user", userSchema);
module.exports = User;