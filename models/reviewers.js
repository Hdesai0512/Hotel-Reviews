const mongoose = require('mongoose')
const {Schema} = mongoose

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




const Reviewer = mongoose.model('Reviewer', reviewerSchema)
module.exports = Reviewer