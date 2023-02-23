// const  router = require('express').Router()
const express = require('express')
const reviews = express.Router()
const Reviews = require('../models/reviews')
const Reviewers = require('../models/reviewers')
const reviewers = require('./reviewers')



reviews.get('/',(req,res) =>{
    Reviewers.find()
        .then(foundReviewers => {
            Reviews.find()
            .then(foundReviews => {
                res.render('index',{
                    reviews:foundReviews,
                    reviewers: foundReviewers,
                    title: 'Index Page'
                })
            })
        })
})
//Show
reviews.get('/id', (req, res) =>{
    Reviews.findById(req.params.id)
    .populate('reviewers')
    .then(foundReviews => {
        const ReviewedBy= foundReviews.getReviewedBy()
        console.log(ReviewedBy)
        res.render('show', {
            reviews:foundReviews
        })
    })
})

//CREATE
reviews.post('/', async (req,res) =>{
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
        res.redirect(`/reviews/${req.params.id}`)
    })
   await reviews.create(req.body)
    res.redirect('/reviews')
})

// New
 reviews.get('/new', (req,res) =>{
    Reviewers.find()
        .then(foundReviewers =>{
            res.render('new',{
                Reviewers: foundReviewers 
            })
        })
  
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
    Reviewers.find()
        .then(foundReviewers =>{
            Reviews.findById(req.params.id)
            .then(foundReviews =>{
                res.render('edit', {
                    reviews: foundReviews,
                    Reviewers: foundReviewers
        })
   

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