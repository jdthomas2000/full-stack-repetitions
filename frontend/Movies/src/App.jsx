import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [post, setPost] = useState({
    title: "",
    main_character: "",
    year_released: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/movies/", fetchOptions);
      const data = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

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

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="title"
        ></input>
        <input
          name="main_character"
          value={post.main_character}
          onChange={handleChange}
          placeholder="main_character"
        ></input>
        <input
          name="year_released"
          value={post.year_released}
          onChange={handleChange}
          placeholder="year_released"
        ></input>

        <button type="submit">Send Data</button>
      </form>
    </>
  );
}

export default App;
