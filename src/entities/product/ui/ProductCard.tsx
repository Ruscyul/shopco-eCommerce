import styles from './ProductCard.module.scss';

function ProductCard() {
  return (
    <div className={styles['product-card']}>
      <img src="" alt="" className={styles['product-card__image']} />
      <p className={styles['product-card__title']}>T-shirt with Tape Details</p>
      <div className={styles['product-card__rating']}>
        <div className={styles['product-card__rating-stars']}>****</div>
        <p className={styles['product-card__rating-numbers']}>
          <span className={styles['product-card__rating-numbers-accent']}>4/</span>5
        </p>
      </div>
      <p className={styles['product-card__price']}>$120</p>
    </div>
  );
}

export default ProductCard;
