const express = require('express')
const router = express.Router()
const TodoModel = require('../../todoModel.js')

router.get('/test', function (req, res) {
    console.log('test', req.authedUser)
    res.json({
        message: "This is todo api"
    })
})

router.delete('/:id',function(req, res){
    const Todoid = req.params.id
    TodoModel.remove({_id: Todoid})
        .then(function(){
        res.json({message:'Success!!'})
    })
})

module.exports = router