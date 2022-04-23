import { useState, useEffect } from 'react'
import { TitleFilm, BigPoster, BoxPoster, Overview } from './MovieDetailsPage.styled'
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom' //useLocation,
import { Button } from '@mui/material';
import { findFilmsInfo } from 'utilits/fetchAPI';
import { linkActiv } from 'utilits/linkActive';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState({})
  const { movieId } = useParams()
  let navig = useNavigate()
  // let location = useLocation()

  // console.log(location);
   // почему то тут прилитает nall в стейте
  //location?.pathname?.from ?? '/'

  useEffect(() => {
    findFilmsInfo(movieId).then((r)=>{
    setFilmInfo(r)})
  }, [movieId])

  //   useEffect(() => {
  // console.log(filmInfo.reviews);
  // }, [filmInfo])

  
  return (
    <>
      <Button onClick={()=>navig(-1)} variant='contained' sx={{mb: '10px'}}>Back</Button>
      <TitleFilm>{filmInfo.original_title}</TitleFilm>
      <BoxPoster>
        {filmInfo.poster_path ? <BigPoster src={imgBaseUrl + filmInfo.poster_path} alt="" /> : <BigPoster src='https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg' alt="" />}
        <div>
          <Overview> <h3>Overview: </h3>{filmInfo.overview}</Overview>
          <Overview><h3>Release date: </h3>{filmInfo.release_date}</Overview>
          <Overview><h3>Vote average: </h3>{filmInfo.vote_average}</Overview>
        </div>
      </BoxPoster>
      <NavLink  style={linkActiv} className='linkBar' to='cast'>cast</NavLink>
      <NavLink style={linkActiv} to='reviews'>reviews</NavLink>
            <Outlet context={[filmInfo]}/>
      </>
  )
}

export default MovieDetailsPage