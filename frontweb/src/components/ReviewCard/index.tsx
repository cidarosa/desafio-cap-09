import { ReactComponent as StarImage} from 'assets/images/star.svg';
import { Review } from "types/review";

type Props = {
    review: Review;
}
const ReviewCard = ({review} : Props) => {

    return(
        <div>
            <div>
                <StarImage />
                <h2>{review.user.name}</h2>
            </div>

            <div>
                <p>{review.text}</p>
            </div>

        </div>
    )
}
export default ReviewCard;