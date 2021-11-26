
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

const Movies = () => {

    const [page, setPage] = useState<SpringPage<Movie>>();

    useEffect(() => {
        const params: AxiosRequestConfig = {
            url: '/movies',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };

        requestBackend(params)
            .then((response) => {
                setPage(response.data);
            });
    }, []);

    return (

        <div className="movies-container">

            <div className="movies-title-container">
                <h1>Tela listagem de filmes</h1>
            </div>

            <div className="row">
                <p>Acessar /movies/1</p>
                <p>Acessar /movies/2</p>
            </div>
        </div>
    );
};

export default Movies;