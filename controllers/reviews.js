const express = require('express')
const reviews = express.Router()
const Reviews = require('../models/reviews')

reviews.get('/', (req,res) => {
    res.render('index',
    {
        reviews: Reviews
    }
    )
    // res.send(Reviews)
})


module.exports = reviews