import { Product } from '../../../shared/types';
import styles from './ProductCard.module.scss';
import Star from '../../../shared/assets/icons/star.svg?react';
import HalfStar from '../../../shared/assets/icons/star-half.svg?react';
import Heart from '../../../shared/assets/icons/heart.svg?react';
import Cart from '../../../shared/assets/icons/cart.svg?react';
import ButtonIcon from '../../../shared/ui/button-icon/ButtonIcon';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  const stars = [];

  for (let i = 1; i <= product.rating.rate; i++) {
    stars.push(<Star />);
  }
  const decimal = Number(product.rating.rate.toString().split('.')[1]);
  if (decimal >= 5) {
    stars.push(<HalfStar />);
  }

  const dispatch = useDispatch();

  function handleAddToCart(id: number) {
    dispatch(addToCart({ id }));
  }

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <img src={product.image} alt="" className={styles['product-card__image']} />
      </div>
      <p className={styles['product-card__title']}>{product.title}</p>
      <div className={styles['product-card__content']}>
        <div>
          <div className={styles['product-card__rating']}>
            <div className={styles['product-card__rating-stars']}>{stars}</div>
            <p className={styles['product-card__rating-numbers']}>
              <span className={styles['product-card__rating-numbers-accent']}>{product.rating.rate}/</span>5
            </p>
          </div>
          <p className={styles['product-card__price']}>${product.price}</p>
        </div>
        <div className={styles['product-card__icons']}>
          <ButtonIcon icon={<Heart />} className={styles['product-card__icon']} />
          <ButtonIcon
            icon={<Cart />}
            onClick={() => handleAddToCart(product.id)}
            className={styles['product-card__icon']}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
