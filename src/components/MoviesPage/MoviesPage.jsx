
import { AiOutlineSearch } from 'react-icons/ai';
import { SerchForm, SerchButton, InputWord, BoxFilms, FilmICard, Poster, FilmTitle } from './MoviesPage.styled';
import { findFilmsTitle } from 'utilits/fetchAPI';
import { useState } from "react";

const MoviesPage = () => {
  const [searchWord, SetSearchWord] = useState('')
  const [arreyFilms, SetArreyFilms] = useState([])

  const onInpurWord = e => {
    SetSearchWord(e.currentTarget.value.trim());
  };

  const formSubmit = event => {
    event.preventDefault();
    SetArreyFilms(findFilmsTitle(searchWord));
  };


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
          return (
            <FilmICard key={film.id}>
              <Poster src={film.src} />
              <FilmTitle>{film.title }</FilmTitle>

            </FilmICard>
          );
        })}
      </BoxFilms>
    </>
  )
}

export default MoviesPage