var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment')

var TodoSchema = new Schema({
    title :String,
    text: String,
    date: String
})

TodoSchema.methods.setDate = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss") 
}

module.exports = mongoose.model('TodoModel', TodoSchema)