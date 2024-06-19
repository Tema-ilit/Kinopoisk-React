import axios from "axios";
import { useEffect, useState } from "react";
const keyApi = "80CCQRZ-339MT5W-K813GXH-TX7J8KC";
const Base_Url = "https://api.kinopoisk.dev/";

export interface IMovie {
  ageRating: null | string;
  alternativeName: string | null;
  countries: Array<{ name: string }>;
  description: string | null;
  enName: string | null;
  genres: Array<{ name: string }>;
  id: number | null;
  isSeries: boolean | null;
  movieLength: number | null;
  name: string | null;
  poster?: { previewUrl: string | null; url: string | null };
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  ratingMpaa: string | number | null;
  releaseYears: Array<{ end: number; start: number }>;
  seriesLength: string | number | null;
  shortDescription: string | number | null;
  status: string | number | null;
  ticketsOnSale: boolean | null;
  top10: string | number | null;
  top250: string | number | null;
  totalSeriesLength: string | number | null;
  type: string | null;
  typeNumber: number | null;
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  year: string | null;
  favorite?: boolean;
}

export interface IFetchresponse {
  docs: Array<IMovie>;
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export const getMovies = async (page?: number): Promise<IFetchresponse> => {
  try {
    const { data } = await axios.get(Base_Url + "v1.4/movie", {
      params: {
        page: page,
        limit: 50,
        type: "movie",
        selectFields: ["poster", "name"],
        notNullFields: "description",
        status: "completed",
      },
      headers: {
        "X-API-KEY": keyApi,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("что то пошло не так");
  }
};

export const getMovie = async (id: string) => {
  try {
    const { data } = await axios.get(Base_Url + "v1.4/movie/" + `${id}`, {
      headers: {
        "X-API-KEY": keyApi,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

interface IRequestStateIdle {
  status: "idle";
}
interface IRequestStateLoading {
  status: "pending";
}
interface IRequestStateSuccess {
  status: "success";
  data: IFetchresponse;
}
interface IRequestStateError {
  status: "error";
  error: unknown;
}

type IRequestState =
  | IRequestStateIdle
  | IRequestStateLoading
  | IRequestStateSuccess
  | IRequestStateError;

export const useMoviesList = (page: number) => {
  const [state, setState] = useState<IRequestState>({ status: "idle" });

  useEffect(() => {
    if (state.status === "pending") {
      getMovies(page)
        .then((data) => {
          setState({ status: "success", data: data });
        })
        .catch((error) => {
          setState({ status: "error", error });
        });
    }
  }, [state, page]);

  useEffect(() => {
    setState({ status: "pending" });
  }, []);

  const refech = () => {
    setState({ status: "pending" });
  };

  return {
    state,
    refech,
  };
};
