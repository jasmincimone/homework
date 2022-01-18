const express = require('express')

const magicRoute = express.Router()


magicRoute.get('/', (req,res)=> {
 console.log('Magic 8 Ball')
 res.status(200).json({greeting: "HEY TIPS"})
})

magicRoute.get('/:total/:tipPercentage', (req, res) => {
    let total = Number(req.params.total)
    let tipPercentage = Number(req.params.tipPercentage)
    let tip = Number(total) * Number(tipPercentage)
    res.status(200).json({message: `Your tip is ${tip}`})
})

module.exports = magicRoute