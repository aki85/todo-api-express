var express = require('express')
var router = express.Router()

router.get('/test', function (req, res) {
    res.json({
        message:"This is todo api"
    })
})

module.exports = router