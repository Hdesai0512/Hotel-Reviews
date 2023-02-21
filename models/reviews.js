const mongoose = require('mongoose')
const { Schema} = mongoose

const reviewsSchema = new Schema({
    hotelName: {
        type: String,
        require: true
    },
    hasReviews:{
        type: Boolean,
        require: true
    },
    image:{
        type: String,
        default: 'https://unsplash.com/photos/lw3Lqe2K7xc'
    },
    Review:{
        type: String,
        require: true
    
    },
    reviewers:{
        type: String,
        enum: ['Richard', 'Eric', 'Lloyd', 'Harsh', 'Roberto']
    }
    
    
    })
    const reviews = mongoose.model('Reviews', reviewsSchema)
    module.exports = reviews