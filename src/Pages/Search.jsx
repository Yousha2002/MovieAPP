import React from "react";
import Cards from "../Component/Cards";
import UseFetch from "../Hooks/UseFetch";
import { useSearchParams } from "react-router-dom";
const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { datas: movies } = UseFetch(api, queryTerm);
  return (
    <>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white ">
          {movies.length === 0
            ? `No Result Found For'${queryTerm}'`
            : `Result For '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((data) => (
            <Cards key={data.id} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
