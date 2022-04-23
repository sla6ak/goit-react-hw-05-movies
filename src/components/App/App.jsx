import { GlobalStyle } from "./GlobalStyled.styled";
import { Routes, Route } from "react-router-dom"; // работа с маршрутизацией
import { lazy } from "react"; //суспенс оборачивает все роуты и рендерит что-то покуда лейзи подгружаються. но можно перенести его в компонент лейаут и обернуть те компоненты которые подгружаються отдельно


//это кастомные компоненты
import Layout from "components/Layout/Layout";
// const MoviesPage = lazy(() => import("../MoviesPage/MoviesPage").then((module) =>{return { default: module.MoviesPage }}))  //then дописываем только при именованном экспорте чтоб превратить в объект иначе без зен сразу вернеться объект дефолтный
const MoviesPage = lazy(() => import("../MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("../HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("../MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

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
          </Route>
        </Routes>
    </>
  );
};
