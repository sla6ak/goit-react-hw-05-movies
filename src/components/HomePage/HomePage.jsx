import React from 'react'
import { useState, useEffect } from "react";
import { findPopularFilms } from 'utilits/fetchAPI';
import { BoxFilms } from 'components/MoviesPage/MoviesPage.styled';
import { InfoPages } from './HomePage.styled';
import FilmCard from 'components/FilmCard/FilmCard';

const HomePage = props => {
  const [popular, setPopular] = useState([])

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
            <FilmCard key={film.id} id={film.id} poster_path={film.poster_path} title={ film.title}/>
            );
          })}
        </BoxFilms>}
    </>
  )
}

export default HomePage