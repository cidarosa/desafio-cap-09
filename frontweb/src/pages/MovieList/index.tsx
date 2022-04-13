import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Genre } from "types/genre";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import Select from "react-select";

import "./styles.css";

const MovieList = () => {
  // provisório
  /* const movie = {
    id: 1,
    title: "Bob Esponja",
    subTitle: "O Incrível Resgate",
    year: 2020,
    imgUrl:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
  }; */

  const [page, setPage] = useState<SpringPage<Movie>>();

   const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  // //carregar lista de genre do back-end
  // const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  // //buscar da API os genres e armazenra no selectGenres
  // useEffect(() => {
  //   requestBackend({ url: "/genres" }).then((response) => {
  //     setSelectGenres(response.data.content);
  //   });
  // }, []);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 20,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container movies-container">
      <div className="base-card movie-filter-container">
        Search filter
        <form>
          {/* <div>
            <Select
              options={selectGenres}
              classNamePrefix="genre_select"
              isMulti
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          </div> */}
          <Select 
            classNamePrefix={"genre-select"}
            options={options}            
          />

        </form>
      </div>

      <div className="row">
        {page?.content.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-xl-3">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}

        {/* <div className="col-sm-6 col-xl-3">
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
        </div> */}
      </div>

      {/* <div className="row movie-link">
        <NavLink to="/movies/1">Acessar /movies/1</NavLink>
        <NavLink to="/movies/2">Acessar /movies/2</NavLink>
      </div> */}
    </div>
  );
};

export default MovieList;
