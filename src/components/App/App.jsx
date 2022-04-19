import { GlobalStyle } from "./GlobalStyled.styled";
import MoviesPage from "components/MoviesPage/MoviesPage";
import HomePage from "components/HomePage/HomePage";
import MovieDetailsPage from "components/MovieDetailsPage/MovieDetailsPage";
import { responseUrl } from "utilits/fetchAPI";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage></HomePage>
      <MoviesPage></MoviesPage>
      <MovieDetailsPage></MovieDetailsPage>
    </>
  );
};
