import { useState } from "react";
import useFetch from "../useFetch";
const Movies = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://89e675c7-e1ae-44db-bc3c-f7996617dc5d-00-aem7gnghnhud.pike.replit.dev/movies",
  );
  // console.log(data);
  //backend BE4.4CW

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://89e675c7-e1ae-44db-bc3c-f7996617dc5d-00-aem7gnghnhud.pike.replit.dev/movie/${movieId}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        throw "Failed to delete Movie";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Movie deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading.....</p>}
      {data?.error && <p>{data?.error}</p>}
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>
            {movie.title}
            <button onClick={() => handleDelete(movie._id)}>Button</button>
          </li>
        ))}
      </ul>
      {successMessage}
    </div>
  );
};

export default Movies;
