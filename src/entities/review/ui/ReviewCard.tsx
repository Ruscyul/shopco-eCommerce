import { getStars } from '../../../shared/model/getStars';
import { reviewData } from '../model/reviewData';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  review: (typeof reviewData)[0];
}

function ReviewCard(props: ReviewCardProps) {
  const { review } = props;
  return (
    <div className={styles['review-card']}>
      <div className={styles['review-card__rating']}>{getStars(review.rating)}</div>
      <p className={styles['review-card__name']}>{review.name}</p>
      <p className={styles['review-card__text']}>{review.text}</p>
      <p className={styles['review-card__date']}>{`Posted on ${review.date}`}</p>
    </div>
  );
}

export default ReviewCard;
