import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Genre } from "types/genre";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import Select from "react-select";
import Pagination from "components/Pagination";

import "./styles.css";
import MovieFilter from "components/MovieFilter";

const MovieList = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  // //carregar lista de genre do back-end
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  // //buscar da API os genres e armazenra no selectGenres
  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: "/genres",
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);
  

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container movies-container">
      <div className="base-card movie-filter-container">
        {/* Search filter */}
        <MovieFilter />

        {/* <div className="movie-filter-select">
          <form>
            <Select
              classNamePrefix={"genre-select"}
              options={selectGenres}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          </form>
        </div> */}
      </div>

      <div className="row">
        {page?.content.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-xl-3">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>

      <Pagination pageCount={page ? page.totalPages : 0} range={3}
       />
    </div>
  );
};

export default MovieList;
