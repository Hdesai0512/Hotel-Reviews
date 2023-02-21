const React = require('react')
const Default = require('./layouts/Default')

function Edit ({reviews, index}) {
    return (
      <Default>
        <h2>Edit a Hotel</h2>
        <form action={`/reviews/${reviews.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={reviews.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
            defaultValue={reviews.image}
          <label htmlFor="hasReviews">Has Review?</label>
          <input
            type="checkbox"
            name="hasReviews"
            id="hasReviews"
            defaultChecked={reviews.hasReviews}
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

module.exports = Edit
