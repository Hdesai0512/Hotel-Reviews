const React = require('react')
const reviewers = require('../controllers/reviewers')
const reviewersSeed= require('../models/reviewers_seed')
const Default = require('./layouts/default')


function Show ({reviewers}) {
    return (
        <Default>
            <h3>{reviewers.name}</h3>
            <p>{reviewers.name} 
            </p>
            <p></p>
        </Default>
    )
    }
module.exports = Show