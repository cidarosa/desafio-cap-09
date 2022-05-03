import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "types/genre";
import { requestBackend } from "util/requests";

import "./styles.css";

export type MovieFilterData = {
  genre: Genre | null; //recebe tipo Genre or null
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({onSubmitFilter}:Props) => {
  // //carregar lista de genre do back-end
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, control, setValue, getValues } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    console.log("Enviou", formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue("genre", value); //set novo valor de genre
    //envia os dados do form com o novo valor
    const obj: MovieFilterData = {
      genre: getValues("genre"),
    };

    onSubmitFilter(obj);
  };

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

  return (
    <div>
      <div className="movie-filter-select">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                classNamePrefix={"genre-select"}
                onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </form>
      </div>
    </div>
  );
};

export default MovieFilter;
