const express = require('express')
const router = express.Router()
const auth = require('./auth.js')

router.use('/user', require('./user.js'))
router.use('/auth', auth.router)
router.use(auth.jwtFilter)
router.use('/todo', require('./todo.js'))

module.exports = router