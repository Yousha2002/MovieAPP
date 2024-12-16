import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "../Pages/MoviesList";
import MoviesDetail from "../Pages/MoviesDetail";
import Search from "../Pages/Search";
import PageNotFound from "../Pages/PageNotFound";
const AllRoutes = () => {
  return (
    <div className=" dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MoviesList api="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MoviesDetail />} />
        <Route
          path="/movies/popular"
          element={<MoviesList api="movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={<MoviesList api="movie/top_rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MoviesList api="movie/upcoming" />}
        />
        <Route path="/search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
