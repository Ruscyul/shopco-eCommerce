import Star from '../assets/icons/star.svg?react';
import HalfStar from '../assets/icons/star-half.svg?react';

export function getStars(rating: number) {
  const stars = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(<Star key={i} />);
  }

  const decimal = Number(rating.toString().split('.')[1]);

  if (decimal >= 5) {
    stars.push(<HalfStar key={'half'} />);
  }

  return stars;
}
