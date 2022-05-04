import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { requestBackend } from "util/requests";

import "./styles.css";

type Props = {
  movieId: string;
};

const MovieCardFull = ({ movieId }: Props) => {
 
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-card-full-container">
      <div className="movie-card-full-img">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>

      <div className="movie-card-full-data">
        <h1>{movie?.title}</h1>
        <h2>{movie?.year}</h2>
        <p>{movie?.subTitle}</p>
        <div className="movie-card-full-data-synopsis">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardFull;
