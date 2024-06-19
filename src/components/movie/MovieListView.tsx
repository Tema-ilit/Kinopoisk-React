import { FC } from "react";
import { IMovie } from "../../api/Movie";
import { MovieView } from "./MovieView";
import "./MovieListView.css";

interface MovieListViewProps {
  moviesList: Array<IMovie>;
  totalPages: number;
}

export const MovieListView: FC<MovieListViewProps> = ({ moviesList }) => {
  return (
    <div className="container">
      <h2 className="movie-title">Каталог фильмов</h2>
      <ul className="list-movie">
        {moviesList.map((movie) => (
          <li className="list-movie__item" key={movie.id}>
            <MovieView movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
