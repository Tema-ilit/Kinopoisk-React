import { Link } from "react-router-dom";
import "./HeaderApp.css";
export const HeaderApp = () => {
  return (
    <header className="header">
      <img src="./vite.svg" alt="Logo" />
      <nav className="">
        <ul className="header__list">
          <Link to="/" className="header__list-item">
            На главную
          </Link>
          <Link to="/favorites" className="header__list-item">
            Избарнное
          </Link>
          <Link to="/about" className="header__list-item">
            Обо мне
          </Link>
        </ul>
      </nav>
    </header>
  );
};
