
import { AiOutlineSearch } from 'react-icons/ai';
import { SerchForm, SerchButton, InputWord, BoxFilms, FilmICard, Poster, FilmTitle } from './MoviesPage.styled';
import { findFilmsTitle } from 'utilits/fetchAPI';
import { useState, useEffect } from "react";
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MoviesPage = () => {
  const [searchWord, SetSearchWord] = useState('')
  const [arreyFilms, SetArreyFilms] = useState([])

  const onInpurWord = e => {
    SetSearchWord(e.currentTarget.value.trim());
  };

  const formSubmit = event => {
    event.preventDefault();
    const queryW = searchWord.toLowerCase().trim()
    if (queryW === '') {return};
    findFilmsTitle(queryW).then((r)=>{
      SetArreyFilms(r.results);
    })
  };

    // просто проверка API
  useEffect(() => {
      if(arreyFilms.length === 0){return}
      console.log(arreyFilms);
  }, [arreyFilms])

  return (
    <>
      <SerchForm onSubmit={formSubmit}>
        <SerchButton type="submit">
          <AiOutlineSearch style={{color: "rgb(250, 250, 250)", width: "100%", height: "100%"}} />
        </SerchButton>
        <InputWord
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={onInpurWord}
          value={searchWord}
        />
      </SerchForm>

    <BoxFilms>
        {arreyFilms.map(film => {
            console.log(film);
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

export default MoviesPage