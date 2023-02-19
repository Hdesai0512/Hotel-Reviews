const React = require('react')
const Default = require('./layouts/default')

function Index({reviews}){
    return (
        <Default>
            <h2>Index Page</h2>
            <div className="newButton">
                <a href="/reviews/new"><button>Add a New Review</button></a>
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