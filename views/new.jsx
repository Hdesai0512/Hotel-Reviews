const React = require('react')
const Reviewer = require('../models/reviewers')
const Default = require('./layouts/Default')

function New (reviewers) {
    return (
      <Default>
        <h2>Add a new Hotel Review</h2>
        <div className="backButton">
            <a href="/reviews"><button>Go back</button></a>
        </div>
        <form action="/reviews" method="POST">
            <label htmlFor="name">Name </label>
            <input
                type="text"
                name="name"
                id="name"
                required
                />
            <label htmlFor="image">Image</label>
            <input
                type="text"
                name="image"
                id="image"
                />
            <label htmlFor="hasReviews">Has Reviews</label>
            <input
                type="checkbox"
                name="hasReviews"
                id="hasReviews"
                defaultChecked
                />
            <label htmlFor="reviewer">Reviewers</label>
            <select name="reviewer" id="reviewer">
               {reviewers.map((reviewers) =>{
                    return(
                        <option value={reviewers.id} key={reviewers.id}>{reviewers.name}</option>
                    )
               }
               
               )}
            </select>
            <br />
            <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New
