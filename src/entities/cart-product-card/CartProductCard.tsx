import { ReactNode } from 'react';
import { ProductType } from '../../shared/types';
import styles from './CartProductCard.module.scss';

interface CartProductCardProps {
  product: ProductType;
  deleteButton: ReactNode;
  countButton: ReactNode;
}

function CartProductCard({ product, deleteButton, countButton }: CartProductCardProps) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__img-container']}>
        <img src={product.image} alt="" className={styles['product-card__img']} />
      </div>
      <div className={styles['product-card__content']}>
        <div className={styles['product-card__heading']}>
          <p className={styles['product-card__title']}>{product.title}</p>
          {deleteButton}
        </div>
        <div className={styles['product-card__footer']}>
          <p className={styles['product-card__price']}>{`$${product.price}`}</p>
          {countButton}
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
