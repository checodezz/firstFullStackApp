import useFetch from "../useFetch";
const MovieByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://89e675c7-e1ae-44db-bc3c-f7996617dc5d-00-aem7gnghnhud.pike.replit.dev/movies/${title}`,
  );

  //backend BE4.4CW

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Director : {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Rating: {data.rating}</p>
      <p>Actors: {data.actors.join(", ")}</p>
      <p>Awards: {data.awards}</p>
      <p>Plot: {data.plot}</p>
      <img src={data.posterUrl} alt="poster image" />
    </div>
  ) : (
    loading && <p>Loading....</p>
  );
};
export default MovieByTitle;
