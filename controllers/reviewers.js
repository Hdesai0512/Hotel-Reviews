const express = require('express')
const reviewers = express.Router()
const Reviewers = require('../models/reviewers')
const ReviewersSeedData= require('../models/reviewers_seed')

reviewers.get('/data/seed', (req,res) => {
    Reviewers.insertMany(ReviewersSeedData)
        .then(res.redirect('/reviewers'))
})



module.exports = reviewers 