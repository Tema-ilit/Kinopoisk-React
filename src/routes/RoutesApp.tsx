import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { FavoritePage } from "../pages/Favorite";
import { AboutUs } from "../pages/AboutUs";
import { MovieInfo } from "../pages/MovieInfo";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:movieId" element={<MovieInfo />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};
