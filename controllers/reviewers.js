const express = require('express')
const reviewers = express.Router()
const Reviewers = require('../models/reviewers')
const ReviewersSeedData= require('../models/reviewers_seed')

// Index
    reviewers.get('/', (req,res) =>{
        Reviewers.find()
            .populate('reviews')
            .then(foundReviewers =>{
                res.send(foundReviewers)
            })
    })


//Seed
reviewers.get('/data/seed', (req,res) => {
    Reviewers.insertMany(ReviewersSeedData)
        .then(res.redirect('/reviewers'))
})

//Show
reviewers.get('/:id', (req,res) => {
    Reviewers.findById(req.params.id)
        .populate('reviews')
        .then(foundReviewers => {
            res.render('reviewersShow', {
                reviewers: foundReviewers
            })
        })
})


module.exports = reviewers 