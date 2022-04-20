import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import MovieFilter from "components/MovieFilter";
import Pagination from "components/Pagination";

import "./styles.css";

const MovieList = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMovies = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 12,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  };

  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <div className="container movies-container">
      <div className="base-card movie-filter-container">
        <MovieFilter />
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

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getMovies}
      />
    </div>
  );
};

export default MovieList;
