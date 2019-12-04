const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const TodoSchema = new Schema({
    title: String,
    is_done: Boolean,
    date: String
})

TodoSchema.methods.setDate = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss") 
}

module.exports = mongoose.model('TodoModel', TodoSchema)