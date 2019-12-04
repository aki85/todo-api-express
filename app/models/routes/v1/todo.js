const express = require('express')
const router = express.Router()
const TodoModel = require('../../todoModel.js')
const utils = require('../../../utils')

router.post('/', function(req, res){
    const Todo = new TodoModel()

    Todo.title = req.body.title
    Todo.is_done = false
    Todo.created_by = req.authedUser._id
    Todo.setDate()

    Todo.save(function(err) {
        if (err){
            res.send(err)
        } else {
            res.json({ message: 'Success!!' })
        }
    })
})

router.get('/', function (req, res) {
    TodoModel
        .find({created_by: req.authedUser._id})
        .then(function (todos) {
            res.json(todos)
        })
})

router.get('/:id', function (req, res) {
    const Todoid = req.params.id
    TodoModel
        .findById(Todoid, function (err, todo) {
            if (todo.created_by == req.authedUser._id) {
                res.json(todo)
            } else {
                res.status(403).send({
                    success: false,
                    message: 'This is not your todo.'
                })
            }
        })
})

router.put('/:id', function (req, res) {
    const Todoid = req.params.id

    TodoModel
        .findById(Todoid, function(err, todo) {
            if (err) {
                res.send(err)
            } else {
                if (todo.created_by == req.authedUser._id) {
                    todo.title = req.body.title
                    todo.is_done = req.body.is_done ? true : false
                    todo.updated_at = utils.getNowText()
    
                    todo.save(function(err) {
                        if (err){
                            res.send(err)
                        } else {
                            res.json({ message: 'Success!' })
                        }
                    })
                } else {
                    res.status(403).send({
                        success: false,
                        message: 'This is not your todo.'
                    })
                }
            }
        })
})
router.delete('/:id', function(req, res){
    const Todoid = req.params.id
    
    TodoModel
        .findById(Todoid, function (err, todo) {
            if (todo.created_by == req.authedUser._id) {
                TodoModel.remove({_id: Todoid})
                    .then(function(){
                        res.json({message:'Success!!'}
                    )
                })
            } else {
                res.status(403).send({
                    success: false,
                    message: 'This is not your todo.'
                })
            }
        })
})

module.exports = router