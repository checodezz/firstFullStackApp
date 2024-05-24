import useFetch from "../useFetch";
const Movies = () => {
  const { data, loading, error } = useFetch(
    "https://89e675c7-e1ae-44db-bc3c-f7996617dc5d-00-aem7gnghnhud.pike.replit.dev/movies",
  );
  console.log(data);

  return (
    <div>
      {data?.map((movie) => (
        <ul key={movie._id}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Movies;
