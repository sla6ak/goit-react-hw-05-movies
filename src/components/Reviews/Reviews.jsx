import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Reviews = props => {
  const [filmInfo] = useOutletContext()
  const reviews = filmInfo.reviews.results
  console.log(reviews)

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => {
          return <li key={review.id}>
            <h4>{review.author}</h4>
           <p> {review.content} </p>
          </li>
        })}
      </ul>
</>
  )
}

export default Reviews