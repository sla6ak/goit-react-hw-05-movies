import { Poster, FilmTitle, CardFilm } from './FilmCard.styled'
import PropTypes from 'prop-types'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';


const FilmCard = ({ title, poster_path }) => {
    return (
      <CardFilm>
           <Poster src={`${imgBaseUrl}${poster_path}`} />
        <FilmTitle>{title}</FilmTitle>
      </CardFilm>
  )
}

FilmCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
}

export default FilmCard