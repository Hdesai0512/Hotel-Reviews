const React= require('react')
const Default = require('./layouts/default')
function Show ({reviews, index}) {
    return (
        <Default>
            <h2>Show page</h2>
            <form action= {`/reviews/${reviews.id}?_method=DELETE`} method="POST">
                <input type='submit' value="Delete"/>
            </form>
            <h3>{reviews.name}</h3>
            <img src={reviews.image} alt={reviews.name} />
            <p>{reviews.getReviewedBy()}</p>
            <a href={`/reviews/${reviews.id}/edit`}><button>Edit</button></a>
         
        </Default>
    )
}

module.exports= Show
