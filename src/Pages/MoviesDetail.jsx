import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

const MoviesDetail = () => {
  const params = useParams();
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=f42a129fe99d116876b632bacab36f12`
      );
      const json = await res.json();
      setDatas(json);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Nike Air Max 21A"
              className="h-auto w-full rounded-md object-contain lg:h-auto lg:w-1/2 "
              src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500  dark:text-white">
                {datas.release_date}
              </h2>
              <h1 className="my-2 text-3xl font-semibold text-black dark:text-white">
                {datas.title}
              </h1>
              <div className="my-2 flex items-center">
                <span className=" items-center space-x-1">
                  <div className=" items-center">
                    <Rating
                      readOnly
                      name="half-rating"
                      defaultValue={0}
                      precision={0.1}
                      value={datas.vote_average / 2}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className=" inline-block text-lg font-semibold dark:text-white ">
                      Rating: {datas.vote_average}
                    </span>
                    <span className=" inline-block text-lg font-semibold dark:text-white">
                      Reviews: {datas.vote_count}
                    </span>
                  </div>
                </span>
              </div>
              <div className="flex items-center gap-2 justify-start">
                {datas.genres &&
                  datas.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="title-font  rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="leading-relaxed my-2 dark:text-white font-serif">
                {datas.overview}
              </p>

              <div className="mb-5 flex flex-col  border-b-2 border-gray-100 pb-5">
                <div className="flex  gap-2">
                  <h1 className=" text-lg font-semibold dark:text-white">
                    Runtime:
                  </h1>
                  <h1 className=" text-lg dark:text-white ">
                    {datas.runtime}min.
                  </h1>
                </div>
                <div className="flex  gap-2">
                  <h1 className=" text-lg font-semibold dark:text-white">
                    Budget:
                  </h1>
                  <h1 className=" text-lg dark:text-white">{datas.budget}</h1>
                </div>
                <div className="flex  gap-2">
                  <h1 className=" text-lg font-semibold dark:text-white">
                    Revenue:
                  </h1>
                  <h1 className=" text-lg dark:text-white">{datas.revenue}</h1>
                </div>
                <div className="flex  gap-2">
                  <h1 className=" text-lg font-semibold dark:text-white">
                    Release Date:
                  </h1>
                  <h1 className=" text-lg dark:text-white ">
                    {datas.release_date}
                  </h1>
                </div>
                <div className="flex  gap-2">
                  <h1 className=" text-lg font-semibold dark:text-white">
                    Movie Preview"
                  </h1>
                  <h1 className=" text-lg  dark:text-white">{datas.imdb_id}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviesDetail;
