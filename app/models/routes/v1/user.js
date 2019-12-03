const express = require('express')
const router = express.Router()
const UserModel = require('../../userModel.js')

router.post('/',function(req,res){

    const User = new UserModel()

    User.name = req.body.name

    User.save(function(err) {
        if (err){
            res.send(err)
        } else {
            res.json({ message: 'Success!!' })
        }
    })
})

router.get('/', function (req, res) {
    UserModel
        .find()
        .then(function (users) {
            res.json(users)
        })
})

module.exports = router