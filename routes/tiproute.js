const express = require('express')

const tipRoute = express.Router()


tipRoute.get('/', (req,res)=> {
 console.log('TIPS hit')
 res.status(200).json({greeting: "HEY TIPS"})
})

tipRoute.get('/:total/:tipPercentage', (req, res) => {
    let total = Number(req.params.total)
    let tipPercentage = Number(req.params.tipPercentage)
    let tip = Number(total) * Number(tipPercentage)
    res.status(200).json({message: `Your tip is ${tip}`})
})

module.exports = tipRoute