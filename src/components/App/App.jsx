import { GlobalStyle } from "./GlobalStyled.styled";
import { Routes, Route } from "react-router-dom"; // работа с маршрутизацией
//это кастомные компоненты
import Layout from "components/Layout/Layout";
import MoviesPage from "components/MoviesPage/MoviesPage";
import HomePage from "components/HomePage/HomePage";
import MovieDetailsPage from "components/MovieDetailsPage/MovieDetailsPage";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import NotSignal from "components/NotSignal/NotSignal";

export const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route exact path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="nosing" element={<NotSignal />} />
        </Route>
      </Routes>
    </>
  );
};
