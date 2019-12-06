const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV == 'production') {
    mongoose.connect('mongodb://heroku_f25qf82d:mj1vprbkmv5le6ekg1emnmvglh@ds351628.mlab.com:51628/heroku_f25qf82d')
} else {
    mongoose.connect('mongodb://localhost:27017/TodoApiAkic')
}
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err)
    process.exit(-1)
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8000

const router = require('./models/routes/v1/')
app.use('/api/v1/', router)

app.listen(port)
console.log('listen on port ' + port)