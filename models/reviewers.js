const mongoose = require('mongoose')
const {Schema} = mongoose
const reviews = ('./reviews')
const reviewersSeed= ('./reviewers_seed.js')
const reviewerSchema = new Schema ({
        name: {
            type: String,
            required: true,
            enum: ['Richard', 'Eric', 'Lloyd', 'Harsh', 'Roberto']
        },
        bio: {
            type: String,
            required: true
        }
})

reviewerSchema.virtual('reviews', {
        ref:'Reviews',
        localField: '_id',
        foreignField: 'reviewers'
}, {toJSON: {virtuals: true}})



const Reviewer = mongoose.model('Reviewer', reviewerSchema)
module.exports = Reviewer