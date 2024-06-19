import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie, getMovie } from "../api/Movie";
import "./MovieInfo.css";

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    if (movieId) {
      getMovie(movieId).then((data) => setMovie(data));
    }
  }, [movieId]);

  return (
    <div className="info-container">
      <div className="movie-wrap">
        <img
          className="movie-wrap-img"
          src={movie?.poster?.previewUrl || "/plug.png"}
          alt="Постер фильма"
        />
        <h2>{movie?.name}</h2>
        <div>
          <p>Рейтинг kp: {movie?.rating.kp}</p>
          <p>Рейтинг imdb: {movie?.rating.imdb}</p>
          <p>Год: {movie?.year}</p>
          <p>
            Жанр:{" "}
            {movie?.genres.map((item) => {
              return item.name;
            })}
          </p>
          <h3>Описание: </h3>
          <p>{movie?.description}</p>
        </div>
      </div>
    </div>
  );
};
