var express = require('express')
var router = express.Router()

// GET  http://localhost:3000/api/v1/article/test
router.get('/test', function (req, res) {
    res.json({
        message:"This is article api"
    })
})

module.exports = router