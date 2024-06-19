import { useEffect, useState } from "react";
import { useMoviesList } from "../../api/Movie";
import { Loader } from "../loader/Loader";
import { MovieListView } from "./MovieListView";
import { Pagination, Stack } from "@mui/material";

export const FetchMovieListView = () => {
  const [page, setPage] = useState<number>(1);
  const { state, refech } = useMoviesList(page);

  useEffect(() => {
    refech();
  }, [page]);

  switch (state.status) {
    case "idle":
    case "pending":
      return <Loader />;

    case "success":
      return (
        <div className="movie-container">
          <MovieListView
            totalPages={state.data.pages}
            moviesList={state.data.docs}
          />
          <Stack spacing={3}>
            <Pagination
              count={state.data.pages}
              page={page}
              variant="outlined"
              color="primary"
              size="large"
              onChange={(_, num) => setPage(num)}
            />
          </Stack>
        </div>
      );

    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>

          <button onClick={refech}>Пoвторить попытку</button>
        </div>
      );
  }
};
