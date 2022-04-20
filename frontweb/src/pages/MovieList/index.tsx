import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import MovieFilter from "components/MovieFilter";
import Pagination from "components/Pagination";

import "./styles.css";

// guardar estado dos controles - paginação e filtragem
type ControlComponentsData = {
  activePage: number; //indica qual página está ativa, vem do comp. paginação
};

const MovieList = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  //estado paginação e filtragem
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
        onChange={handlePageChange}
      />
    </div>
  );
};

export default MovieList;
