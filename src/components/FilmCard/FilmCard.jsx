import { Poster, FilmTitle, CardFilm } from './FilmCard.styled'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';


const FilmCard = ({ title, poster_path, id }) => {
    return (
      <CardFilm>
         <Link to={'movies/' + id}>
           <Poster src={`${imgBaseUrl}${poster_path}`} />
           <FilmTitle>{title}</FilmTitle>
         </Link> </CardFilm>
  )
}

FilmCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
}

export default FilmCard