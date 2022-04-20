import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Genre } from "types/genre";
import { requestBackend } from "util/requests";

import "./styles.css";

const MovieFilter = () =>{

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

    return(
        <div className="movie-filter-select">
        <form>
          <Select
            classNamePrefix={"genre-select"}
            options={selectGenres}
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        </form>
      </div>
    );

};

export default MovieFilter;