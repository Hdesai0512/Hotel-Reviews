const React = require('react')
const Default = require('./layouts/Default')

function New () {
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
                <option value= "Richard">Richard</option>
                <option value= "Eric">Eric</option>
                <option value= "Lloyd">Lloyd</option>
                <option value= "Harsh">Harsh</option>
                <option value= "Roberto">Roberto</option>
            </select>
            <br />
            <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New
