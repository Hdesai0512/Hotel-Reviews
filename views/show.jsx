const React= require('react')
const Default = require('./layouts/default')
function Show ({reviews}) {
    return (
        <Default>
            <h2>Show page</h2>
            <h3>{reviews.name}</h3>
            <img src={reviews.image} alt={reviews.name} />
        </Default>
    )
}