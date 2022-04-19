import React from 'react'
import PropTypes from 'prop-types'
import Cast from 'components/Cast/Cast'
import Reviews from 'components/Reviews/Reviews'

const MovieDetailsPage = props => {
  return (
      <>
          <Cast></Cast>
          <Reviews></Reviews>
      </>
  )
}

MovieDetailsPage.propTypes = {}

export default MovieDetailsPage