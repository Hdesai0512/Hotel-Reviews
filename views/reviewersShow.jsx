const React = require('react')
const reviewers = require('../controllers/reviewers')
const Default = require('./layouts/default')


function Show ({reviewers}) {
    return (
        <Default>
            <h3>{reviewers.name}</h3>
            <p>{reviewers.name} has reviewed many properties including {reviewers.bio}</p>
        </Default>
    )
    }
module.exports = Show