const express = require('express')
const router = express.Router()
const UserModel = require('../../userModel.js')

router.post('/',function(req,res){
    const User = new UserModel()

    User.uuid = req.body.uuid
    User.name = req.body.name
    User.email = req.body.email
    User.password = req.body.password
    User.setDate()

    User.save(function(err) {
        if (err){
            res.send(err)
        } else {
            res.json({ message: 'Success!!' })
        }
    })
})

// router.get('/', function (req, res) {
//     UserModel
//         .find()
//         .then(function (users) {
//             res.json(users)
//         })
// })

// router.get('/:id', function (req, res) {
//     const Userid = req.params.id
//     UserModel
//         .findById(Userid,function (err,user) {
//             res.json(user)
//         })
// })

// router.put('/:id',function (req, res) {
//     const Userid = req.params.id

//     UserModel
//         .findById(Userid, function(err, user) {
//             if (err) {
//                 res.send(err)
//             } else {

//                 user.name = req.body.name

//                 user.save(function(err) {
//                     if (err){
//                         res.send(err)
//                     } else {
//                         res.json({ message: 'Success!' })
//                     }
//                 })
//             }
//         })
// })


module.exports = router