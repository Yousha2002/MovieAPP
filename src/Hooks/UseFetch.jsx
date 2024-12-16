import React, { useEffect, useState } from "react";

const UseFetch = (api, queryTerm = "") => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${api}?api_key=f42a129fe99d116876b632bacab36f12&query=${queryTerm}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const json = await res.json();
        setDatas(json.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };
    fetchMovies();
  }, [api]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return { datas };
};

export default UseFetch;
