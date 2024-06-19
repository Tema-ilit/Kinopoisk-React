import { FC, useEffect, useState } from "react";
import { IMovie } from "../../api/Movie";
import "./MovieView.css";
import { Link } from "react-router-dom";

interface MovieViewprops {
  movie: IMovie;
}

export const MovieView: FC<MovieViewprops> = ({ movie }) => {
  const [favorite, setFavorite] = useState((movie.favorite = false));

  useEffect(() => {
    const localMoviess = JSON.parse(localStorage.getItem("movieList") || "[]");
    localMoviess.map((item: IMovie) => {
      if (item.id === movie.id) {
        setFavorite(true);
      }
    });
  }, []);

  const handleClick = () => {
    const localMovies = JSON.parse(localStorage.getItem("movieList") || "[]");
    if (favorite) {
      localMovies.splice(localMovies.indexOf(movie), 1);
      localStorage.setItem("movieList", JSON.stringify(localMovies));
      setFavorite(!favorite);
    } else {
      localMovies.push(movie);
      localStorage.setItem("movieList", JSON.stringify(localMovies));
      setFavorite(!favorite);
    }
  };

  return (
    <div className="cart-movie">
      <img
        className="cart-cart-img"
        src={movie.poster?.previewUrl || "/plug.png"}
        alt="Постер фильма"
      />
      <div className="cart-movie-descr">
        <Link className="movie-link" to={`/${movie.id}`} key={movie.id}>
          <h2 className="cart-movie__title movie-link">
            {movie.name || movie.alternativeName}
          </h2>
        </Link>

        <div className="cart-movie__info">
          <span className="cart-movie__rating-title">Рейтинг:</span>
          <div className="cart-movie__rating">
            <span className="cart-movie__rating-span">
              кинописк: {movie.rating.kp}
            </span>
            <span className="cart-movie__rating-span">
              imdb: {movie.rating.imdb}
            </span>
          </div>
        </div>
        <span className="cart-movie__year">Вышел {movie.year}</span>
        <button className="cart-movie__btn" onClick={handleClick} type="button">
          {favorite ? "Удалить из избранного" : "Добавить в избранное"}
        </button>
      </div>
    </div>
  );
};
