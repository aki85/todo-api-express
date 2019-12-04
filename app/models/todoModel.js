const mongoose = require('mongoose')
const Schema = mongoose.Schema
const utils = require('../utils')

const TodoSchema = new Schema({
    title: String,
    is_done: Boolean,
    created_by: String,
    created_at: String,
    updated_at: String
})

TodoSchema.methods.setDate = function () {
    this.created_at = utils.getNowText()
    this.updated_at = utils.getNowText()
}

module.exports = mongoose.model('TodoModel', TodoSchema)