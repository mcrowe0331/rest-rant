const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let starts = ''
    for (let i = 0; i < averageRating; i++) {
      starts += '*'
    }
    rating = (
      <h3>
        stars
      </h3>
  )
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
 return (
<Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
          <h1>{ data.place.name }</h1>
        <h2>
          Rating
          </h2>
          {rating}
          <br />
          Description
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <br />
        <a href="{`/places/${data.place.id}/edit`}" className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action="{`/places/${data.place.id}?_method=DELETE`}"> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>    
    </div>
    </div>
    <hr />
    <h2>Comments</h2>
    {comments}
    <div className="row">
    </div>
    <hr/>
  </main>
</Def>
 )
}

module.exports = show
