const React = require('react')
const Default = require('./layouts/default')
const reviewer = require('../models/reviewers')

function Index({reviews, reviewers, title}){
    return (
        <Default title= {title}>
            <h2>Index Page</h2>
           
            <div className="newButton">
                <a href='/reviews/new'>
                    <button>Add a New Review</button>
                    </a>
            </div>
            <h3>Reviewers</h3>
            <ul>
                {
                    reviewers.map((reviewer)=>{
                        return (
                            <li key={reviewer._id}>
                                <a href= {`/reviewers/${reviewer._id}`}>{reviewer.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Reviews</h3>
          {/*  <p>I have {reviews[0].name} review!</p> */}
          <ul>
          {
                reviews.map((reviews)=>{
                    return (<li key={reviews}>
                       <a href={`/reviews/${reviews}`}>
                       {reviews.name}
                       </a>
                   </li>
                   )
               })
            }
          </ul>
        </Default>
    )
}


module.exports = Index