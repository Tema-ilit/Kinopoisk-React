import { useEffect, useState } from "react";
import { IMovie } from "../api/Movie";
import "./Favorites.css";

export const FavoritePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("movieList") || "[]");
    setMovies(data);
    console.log(movies);
  }, []);
  return (
    <>
      <div className="favorite-container">
        <h1>Мои фильмы</h1>
        <ul className="favorites-list">
          {movies.map((movie: IMovie) => (
            <li className="list-item" key={movie.id}>
              <img
                className="favorites-img"
                src={movie.poster?.previewUrl || "/plug.png"}
                alt="Постер фильма"
              />
              <h2> {movie.name}</h2>
              <button
                onClick={() => {
                  const newMovies = movies.filter(
                    (item: IMovie) => item.id !== movie.id
                  );
                  setMovies(newMovies);
                  localStorage.setItem("movieList", JSON.stringify(newMovies));
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
