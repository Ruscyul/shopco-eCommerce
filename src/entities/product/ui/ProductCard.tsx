import { Product } from '../../../shared/types';
import styles from './ProductCard.module.scss';

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <img src={product.image} alt="" className={styles['product-card__image']} />
      </div>
      <p className={styles['product-card__title']}>{product.title}</p>
      <div className={styles['product-card__content']}>
        <div className={styles['product-card__rating']}>
          <div className={styles['product-card__rating-stars']}>****</div>
          <p className={styles['product-card__rating-numbers']}>
            <span className={styles['product-card__rating-numbers-accent']}>{product.rating.rate}/</span>5
          </p>
        </div>
        <p className={styles['product-card__price']}>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
