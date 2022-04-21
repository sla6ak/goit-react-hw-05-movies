import { useState, useEffect } from 'react'
import { TitleFilm, BigPoster, BoxPoster, Overview } from './MovieDetailsPage.styled'
import { useParams } from 'react-router-dom'
import { findFilmsInfo } from 'utilits/fetchAPI'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState({})
  const {movieId} = useParams()

  useEffect(() => {
    findFilmsInfo(movieId).then((r)=>{
    setFilmInfo(r)})
  },[movieId])

console.log(filmInfo);
  return (
    <>
      <TitleFilm>{filmInfo.original_title}</TitleFilm>
      <BoxPoster>
        <BigPoster src={imgBaseUrl + filmInfo.poster_path} alt="" />
        <div>
          <Overview> <h3>Overview: </h3>{filmInfo.overview}</Overview>
          <Overview><h3>Release date: </h3>{filmInfo.release_date}</Overview>
          <Overview><h3>Vote average: </h3>{filmInfo.vote_average}</Overview>
        </div>
      </BoxPoster>
      
      </>
  )
}

export default MovieDetailsPage