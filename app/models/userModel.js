const mongoose = require('mongoose')
const Schema = mongoose.Schema
const utils = require('../utils')

const UserSchema = new Schema({
    uuid: String,
    name: String,
    email: String,
    password: String,
    created_at: String
})

UserSchema.methods.setCreatedAt = function () {
    this.created_at = utils.getNowText()
}

module.exports = mongoose.model('UserModel', UserSchema)