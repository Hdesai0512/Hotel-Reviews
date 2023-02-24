const express = require('express')
const reviewers = express.Router()
const Reviewers = require('../models/reviewers')
const ReviewersSeedData= require('../models/reviewers_seed')

// Index
    reviewers.get('/', async (req,res) =>{
        const reviewers = await Reviewers.find().populate('reviews')
        res.json(reviewers)
    })


//Seed
reviewers.get('/data/seed', async (req,res) => {
    await Reviewers.insertMany(ReviewersSeedData)
        .then(res.redirect('/reviewers'))
})

//Show
reviewers.get('/:id', async (req,res) => {
    const {id} = req.params
    const reviewers = await Reviewers.findById(id).populate('reviews')

    res.render('reviewersShow', {
        reviewers 
    })
})


module.exports = reviewers 