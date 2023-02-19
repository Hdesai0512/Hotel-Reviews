// const  router = require('express').Router()
const express = require('express')
const reviews = express.Router()
const Reviews = require('../models/reviews')

reviews.get('/', (req,res) => {
    res.render('Index',
    {
        reviews: Reviews
    }
    )
    // res.send(Reviews)
})

reviews.get('/;arrayIndex',(req,res) =>{
    res.send(Reviews[req.params.arrayIndex])
})
//Show
reviews.get('/:arrayIndex', (req, res) =>{
    if (Reviews[req.params.arrayIndex]) {
    res.render('Show', {
        reviews: Reviews[req.params.arrayIndex]
    })
    } else {
        res.send('404')
    }
})

module.exports = reviews