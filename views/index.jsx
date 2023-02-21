const React = require('react')
const Default = require('./layouts/default')

function Index({reviews, reviewers, title}){
    return (
        <Default title= {title}>
            <h2>Index Page</h2>
            <h3>Reviewers</h3>
            <ul>
                {
                    reviewers.map((reviewer)=>{
                        return (
                            <li key={reviewer.id}>
                                <a href= {`/reviewers/${reviewer.id}`}>{reviewer.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Reviews</h3>
            <div className="newButton">
                <a href='/reviews/new'>
                    <button>Add a New Review</button>
                    </a>
            </div>
          {/*  <p>I have {reviews[0].name} review!</p> */}
          <ul>
          {
                reviews.map((reviews, index)=>{
                    return (<li key={index}>
                       <a href={`/reviews/${index}`}>
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