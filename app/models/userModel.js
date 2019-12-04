const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const UserSchema = new Schema({
    uuid: String,
    name: String,
    created_at: String
})

UserSchema.methods.setCreatedAt = function () {
    this.created_at = moment().format("YYYY-MM-DD HH:mm:ss") 
}

module.exports = mongoose.model('UserModel', UserSchema)