const express = require('express');
const magicData = require('../data/magicData')
const magicRoute = express.Router()


magicRoute.get('/', (req, res)=> {
 res.status(200).json({greeting: "MUST BE MAGIC!!! <3"})
})

magicRoute.get('/:question', (req, res)=>{
    let quotes = magicData[Math.floor(Math.random() * magicData.length)];
    res.status(200).json({message: quotes})
});


module.exports = magicRoute;