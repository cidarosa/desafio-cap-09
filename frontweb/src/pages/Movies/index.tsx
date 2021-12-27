/*
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';*/

import { Link } from 'react-router-dom';

import './styles.css';

const Movies = () => {
/*
    const [page, setPage] = useState<SpringPage<Movie>>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: '/movies',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };

        setIsLoading(true);

        requestBackend(params)
            .then((response) => {
                setPage(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            }
            );
    }, []);
*/
    return (
        <div className="container my-4 movies-container">

            <div className="row movies-title-container">
                <h1>Tela listagem de filmes</h1>
            </div>

            <div className="row movie-link">
                <Link to="movies/1">Acessar /movies/1</Link>
                <Link to="movies/2">Acessar /movies/2</Link>

                {/*isLoading ? <CardLoader /> : (
                    page?.content.map(movie => (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
                            <Link to="movies/1">Acessar /movies/1</Link>
                            <Link to="movies/2">Acessar /movies/2</Link>

                        </div>
                    )
                    ))*/}
            </div>
            {/*
            <div className="row">
                <p>Criar Pagination</p>
            </div>*/}
        </div>
    );
};

export default Movies;