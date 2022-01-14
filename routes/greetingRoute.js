const express = require('express')
// const data = require('../data/learnerData')
const greetingRoute = express.Router()

// URL: localhost:6000/learner
greetingRoute.get('/', (req,res)=> {
 console.log('greetings hit')
 res.status(200).json({greeting: "Hello Stranger"})
})

greetingRoute.get('/:name', (req, res) => {
    let name = req.params.name
    console.log('hello from route')

    res.status(200).json({Hello: "What's Up," + name})
})

module.exports = greetingRoute