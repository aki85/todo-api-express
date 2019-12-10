const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const UserModel = require('../../userModel.js')
require('dotenv').config()

router.post('/', function(req, res) {
    UserModel.findOne({
        uuid: req.body.uuid
    }, function(err, user) {
        if (err) throw err
        if (!user) {
            res.json({
            success: false,
            message: 'Authentication failed. User not found.'
            })
            return
        }
  
        if (user.password != req.body.password) {
            res.json({
                success: false,
                message: 'Authentication failed. Wrong password.'
            })
            return
        }
    
        const token = jwt.sign(user.toJSON(), process.env.secret, {
            expiresIn: '24h'
        })  
        res.json({
            success: true,
            message: 'Authentication successfully finished.',
            token: token
        }) 
    })  
})

const jwtFilter = function(req, res, next) {
    console.log('body test', req)
    const token = req.data.token || req.body.token || req.query.token || req.headers['Authorization']

    if (!token) {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        })
    }

    jwt.verify(token, process.env.secret, function(err, authedUser) {
        if (err) {
            return res.json({
                success: false,
                message: 'Invalid token'
            })
        }

        req.authedUser = {
            _id: authedUser._id,
            name: authedUser.name,
            created_at: authedUser.created_at
        }
        
        next()
    })
}

module.exports = {
    router, jwtFilter
}