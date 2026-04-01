import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  if (movies.length === 0) return <h1>loading...</h1>;

  return (
    <>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie">
            <p>{movie.title}</p>
            <p>{movie.main_character}</p>
            <p>{movie.year_released}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
