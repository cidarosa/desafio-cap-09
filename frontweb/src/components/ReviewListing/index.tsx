import { Review } from "types/review";

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div>
      <h1>Review Listing</h1>
      <h4>{reviews.map((x) => x.user.name)}</h4>
      <p>{reviews.map((x) => x.text)}</p>
    </div>
  );
};

export default ReviewListing;
