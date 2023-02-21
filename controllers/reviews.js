// const  router = require('express').Router()
const express = require('express')
const reviews = express.Router()
const Reviews = require('../models/reviews')

reviews.get('/', (req,res) => {
    res.render('Index',)
    {
        reviews: Reviews
    }
    
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

// Delete a review
reviews.delete('/:id', async (req, res) => {
    const { id } = req.params
    await reviews.findByIdAndDelete(id)
    res.status(303).redirect('/reviews')
})
module.exports = reviews