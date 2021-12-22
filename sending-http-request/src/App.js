import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(() => {
    setIsloading(true);
    setError(null);
    fetch("http://react-http-f7845-default-rtdb.firebaseio.com/movies.json")
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Error occured!");
        }
        return response.json();
      })
      .then((data) => {
        let moviesArray = [];
        for (let key in data) {
          moviesArray.push({
            key: key,
            title: data[key].title,
            releaseDate: data[key].releaseDate,
            openingText: data[key].openingText,
          });
        }
        console.log(moviesArray);
        setMovies(moviesArray);
        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, []);

  useEffect(fetchMovies, [fetchMovies]);

  const addMovieHandler = (movie) => {
    fetch("https://react-http-f7845-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  let content = <p>Found No Movies. :(</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = error;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
