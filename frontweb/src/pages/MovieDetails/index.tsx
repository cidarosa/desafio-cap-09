import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Review } from "types/review";
import { requestBackend } from "util/requests";
import { hasAnyRoles } from "util/auth";
import ReviewForm from "components/ReviewForm";
import { useParams } from "react-router-dom";
import ReviewListing from "components/ReviewListing";

import "./styles.css";
import MovieCardFull from "components/MovieCardFull";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="base-card movie-details-container">
      <div className="movie-details-info">
        <MovieCardFull movieId={movieId} />
      </div>

      <div className="movie-form-card">
        <div className="row movie-title-container">
          {hasAnyRoles(["ROLE_MEMBER"]) && (
            <>
              <ReviewForm
                movieId={movieId}
                onInsertReview={handleInsertReview}
              />
            </>
          )}
        </div>

        <div className="movie-details-card">
          <ReviewListing reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
