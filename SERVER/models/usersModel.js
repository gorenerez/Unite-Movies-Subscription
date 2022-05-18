const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FullName : String,
    UserName : String,
    Password : String,
    Permission : Boolean
})

module.exports = mongoose.model('users', UserSchema)