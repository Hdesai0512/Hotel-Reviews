// const  router = require('express').Router()
const router = require('express').Router()
const Reviews = require('../models/reviews')
const Reviewers = require('../models/reviewers')


router.get('/', async(req,res) =>{
    const review = await Reviews.find()
    const reviewers = await Reviewers.find()
        res.render('index', {
            reviews: review,
            reviewers
        })
})
//Show
router.get('/id', (req, res) =>{
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
router.post('/', async (req,res) =>{
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

// create a New review
 router.get('/new', async (req,res) =>{
    const reviewers = await Reviewers.find()
    res.render('new', {
        reviewers 
    })
 })

 //UPDATE
 router.put('/:id', async (req,res) =>{
    const {id} = req.params
    const {image, hasReviews} = req.body
    if(!image) req.body.image = 'https://unsplash.com/photos/lw3Lqe2K7xc'
    if(req.body.hasReviews === 'on'){
        req.body.hasReviews = true
     } else {
        req.body.hasReviews = false
    }
    await Reviews.deleteMany()
    res.redirect('reviews')
 })

//EDIT
router.get('/:id/edit', async (req,res) =>{
    const {id} = req.params
    const review = await Reviews.findById(id)
    const reviewers = await Reviewers.findById(id)
    res.render('edit', {
        review, reviewers
    })


})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await Reviews.findByIdAndDelete(id)
    res.status(303).redirect('/reviews')
})

module.exports = router