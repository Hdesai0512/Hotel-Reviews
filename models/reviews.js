const mongoose = require('mongoose')
const { Schema} = mongoose

const reviewsSchema = new Schema({
    name: {
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
    reviewers:{
        type: Schema.Types.ObjectID,
        ref: 'Reviewer'
        
    }
    
    
    })
    //helper method
    reviewsSchema.methods.getReviewedBy= function(){
        return `${this.name} was certified and reviewed by ${this.reviewers}`
    }
    const reviews = mongoose.model('Reviews', reviewsSchema)
    module.exports = reviews