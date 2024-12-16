import React from "react";
import MoviesDetail from "./MoviesDetail";
import MoviesList from "./MoviesList";
import PageNotFound from "./PageNotFound";
import Search from "./Search";

const Index = () => {
  return (
    <>
      <MoviesDetail />
      <MoviesList />
      <PageNotFound />
      <Search />
    </>
  );
};

export default Index;
