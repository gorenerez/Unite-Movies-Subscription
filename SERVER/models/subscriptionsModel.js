const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
    MovieId : String,
    MemberId : String,
    MovieName : String,
    MemberName : String,
    Date : Date
})

module.exports = mongoose.model('subscriptions', SubscriptionSchema)