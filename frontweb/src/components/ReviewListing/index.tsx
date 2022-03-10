import { Review } from "types/review";

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div>
      
      <h4>{reviews.map((review) => review.user.name)}</h4>
      
      <p>{reviews.map((review) => review.text)}</p>
    </div>
  );
};

export default ReviewListing;
