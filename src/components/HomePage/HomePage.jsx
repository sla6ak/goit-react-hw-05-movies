import React from 'react'
import { Link,  useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import { findPopularFilms } from 'utilits/fetchAPI';
import { BoxFilms } from 'components/MoviesPage/MoviesPage.styled';
import { InfoPages } from './HomePage.styled';
import FilmCard from 'components/FilmCard/FilmCard';

const HomePage = props => {
  const [popular, setPopular] = useState([]);
  const location = useLocation();

  useEffect(() => {
    findPopularFilms().then((r)=>{
      setPopular(r.results)
    })
  }, [])

  return (
    <>
      <InfoPages>Popular films of week</InfoPages>

        {popular.length > 0 && <BoxFilms>
        {popular.map(film => {
          return (
            
         <Link key={film.id} to={'movies/' + film.id} 
              state={{ from: location }}>
              <FilmCard poster_path={film.poster_path} title={film.title} />
            </Link>
            );
          })}
        </BoxFilms>}
    </>
  )
}

export default HomePage