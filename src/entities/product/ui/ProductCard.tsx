import { ProductType } from '../../../shared/types';
import styles from './ProductCard.module.scss';
import Heart from '../../../shared/assets/icons/heart.svg?react';
import Cart from '../../../shared/assets/icons/cart.svg?react';
import ButtonIcon from '../../../shared/ui/button-icon/ButtonIcon';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { getStars } from '../../../shared/model/getStars';
import { Link } from 'react-router-dom';

interface ProductProps {
  product: ProductType;
  className?: string;
}

function ProductCard(props: ProductProps) {
  const { product, className } = props;
  const stars = getStars(product.rating.rate);

  const dispatch = useDispatch();

  function handleAddToCart(id: number, event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    dispatch(addToCart({ id }));
  }

  return (
    <Link to={`/shopco-eCommerce/product/${product.id}`} className={styles['product-card-link']}>
      <div className={`${styles['product-card']} ${className}`}>
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
          <div className={styles['product-card__icons']} onClick={(event) => event.stopPropagation()}>
            <ButtonIcon icon={<Heart />} className={styles['product-card__icon']} />
            <ButtonIcon
              icon={<Cart />}
              onClick={() => handleAddToCart(product.id, event)}
              className={styles['product-card__icon']}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
