import Cards from "../Component/Cards";
import UseFetch from "../Hooks/UseFetch";

const MoviesList = ({ api }) => {
  const { datas: movies } = UseFetch(api);

  return (
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((data) => (
          <Cards key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
