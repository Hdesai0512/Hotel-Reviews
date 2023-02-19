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

reviews.get('/:arrayIndex',(req,res) =>{
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
reviews.get('/indexArray/edit', (req,res) =>{
    res.render('edit', {
        reviews:Review[req.params.indexArray],
        index:req.params.indexArray
    })

})

module.exports = reviews