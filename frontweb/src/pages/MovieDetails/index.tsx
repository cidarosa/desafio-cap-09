import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Review } from 'types/review';
import {  requestBackend } from 'util/requests';

import './styles.css';
import FormReviewCard from 'components/FormReviewCard';
import { hasAnyRoles } from 'util/auth';

const MovieDetails = () => {

    const [page, setPage] = useState<SpringPage<Review>>();
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

    return (

        <div className='movie-details-container'>

            <h1>Tela detalhes do filme id: ???</h1>

            <div className='base-card movie-form-card'>

                <div className="row movie-title-container">
                    {hasAnyRoles(["ROLE_MEMBER"]) && (
                        <>
                            <h4>Card do Form de Avaliação</h4>
                            <FormReviewCard />
                            <h4>Usuários MEMBER</h4>
                        </>
                    )

                    }

                </div>

                <div className='base-card movie-detail-card'>
                    <h4>TODAS avaliações do filme </h4>
                </div>

            </div>
        </div>
    );
};

export default MovieDetails;