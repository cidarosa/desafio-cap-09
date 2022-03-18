import MovieCard from "components/MovieCard";
import { NavLink } from "react-router-dom";

import "./styles.css";

const MovieList = () => {
  // provisório
  const movie = {
    id: 1,
    title: "Bob Esponja",
    subTitle: "O Incrível Resgate",
    year: 2020,
    imgUrl:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
  };

  return (
    <div className="container movies-container">
  
      <div className="base-card movie-filter-container">Search filter</div>

      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-xl-3">
          <MovieCard movie={movie} />
        </div>
        <div className="col-sm-6 col-xl-3">
          <MovieCard movie={movie} />
        </div>
      </div>

      <div className="row movie-link">
        <NavLink to="/movies/1">Acessar /movies/1</NavLink>
        <NavLink to="/movies/2">Acessar /movies/2</NavLink>
      </div>
    </div>
  );
};

export default MovieList;
