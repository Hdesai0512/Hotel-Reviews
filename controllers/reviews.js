// const  router = require('express').Router()
const express = require('express')
const reviews = express.Router()
const Reviews = require('../models/reviews')

reviews.get('/', (req,res) => {
    Reviews.findById(req.params.id)
        .then(foundReviews => {
           res.render('show', {
            reviews: foundReviews
           })
        })
        .catch(err =>{
            res.send('404')
        })
})

reviews.get('/:arrayIndex',(req,res) =>{
    res.send(Reviews[req.params.arrayIndex])
})
//Show
reviews.get('/id', (req, res) =>{
    Reviews.findById(req.params.id)
    .then(foundReviews => {
        const ReviewedBy= foundReviews.getReviewedBy()
        console.log(ReviewedBy)
        res.render('show', {
            reviews:foundReviews
        })
    })
})

//CREATE
reviews.post('/', (req,res) =>{
   if(!req.body.image) {
    req.body.image= "'https://unsplash.com/photos/lw3Lqe2K7xc'"
   }
    if(req.body.hasReviews === 'on'){
        req.body.hasReviews= true
    } else {
        req.body.hasReviews= false
    
    }
    Reviews.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updateReviews => {
        console.log(updatedReview)
        res.redirect(`/reviews/${req.params.id}`)
    })
    reviews.push(req.body)
    res.redirect('/reviews')
})

// New
 reviews.get('/new', (req,res) =>{
    res.render('new')
 })

 //UPDATE
 reviews.put('/:arrayIndex', (req,res) =>{
    if(req.body.hasReviews === 'on'){
        req.body.hasReviews = true
     } else {
        req.body.hasReviews = false
    }
    Reviews[req.params.arrayIndex]= req.body
    res.redirect(`/reviews/${req.params.arrayIndex}`)
 })

//EDIT
reviews.get('/:id/edit', (req,res) =>{
    Reviews.findById(req.params.id)
    .then(foundReviews =>{
        res.render('edit', {
            reviews: foundReviews

    })
    
    })

})

//DELETE
reviews.delete('/:id',  (req, res) => {
    Reviews.findByIdAndDelete(req.params.id)
    .then(deleteReviews => {
    res.status(303).redirect('/reviews')
    })
})

module.exports = reviews