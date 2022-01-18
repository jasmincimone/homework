const express = require('express')
const data = require('../data/learnerData')
const learnerRoute = express.Router()

// URL: localhost:6000/learner
learnerRoute.get('/', (req, res) => {
    console.log("HIT!")
    res.status(200).json({learner: data})
})

//SHOULD ALWAYS RETURN SOMETHING
learnerRoute.post('/', (req, res) => {
    let learner = req.body
    data.push(learner)

    res.status(201).json({message: "Sucess!", learner: learner})
})

//URL: localhost:6000/learner/:id
learnerRoute.get('/:id', (req,res)=> {
    let id = Number(req.params.id)

    if(id >= data.length || id < 0){
        res.status(404).json({message: "Please enter a valid number"})
    }

    res.status(200).json({learner: data[id]})
})

learnerRoute.put('/:id', (req, res)=>{
    let id = Number(req.params.id)
    let new_post = req.body
    if(id >= data.length || id < 0){
        res.status(404).json({message: "Please enter a valid number"})
    }

        data[id] = new_post
        res.status(201).json({message: "UPDATED", learner: data[id]})
})


learnerRoute.delete('/:id', (req, res)=>{
    let id = Number(req.params.id)

    data = data.splice(id, 1)
    res.status(204).json({message: "DELETED"})
})

module.exports = learnerRoute