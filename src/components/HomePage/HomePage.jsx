import React from 'react'
import { useState, useEffect } from "react";
import { findPopularFilms } from 'utilits/fetchAPI';
import { BoxFilms, FilmICard, Poster, FilmTitle } from 'components/MoviesPage/MoviesPage.styled';
import { InfoPages } from './HomePage.styled';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

const HomePage = props => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    findPopularFilms().then((r)=>{
      setPopular(r.results)
    })
  }, [])

  // просто проверка API
  // useEffect(() => {
  //     if(popular.length === 0){return}
  //     console.log(popular);
  // }, [popular])

  return (
    <>
      <InfoPages>Popular films of week</InfoPages>

        <BoxFilms>
        {popular.map(film => {
          return (
          <FilmICard key={film.id}>
            <Poster src={`${imgBaseUrl}${film.poster_path}`} />
            <FilmTitle>{film.title }</FilmTitle>
          </FilmICard>
            );
          })}
        </BoxFilms>
    </>
  )
}

export default HomePage