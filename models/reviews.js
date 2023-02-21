const mongoose = require('mongoose')
const reviewsSchema = new mongoose.Schema({

    name: {
    type: String,
    require: true
},
hasReviews:{
    type: Boolean,
    require: true
},
Reviewer:{
    type: String,
    require: true
},
image:{
    type: String,
    default: 'https://unsplash.com/photos/lw3Lqe2K7xc'
}

})