import Button from '../../shared/ui/button/Button';
import styles from './Filters.module.scss';
import Star from '../../shared/assets/icons/star.svg?react';

interface FiltersProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}

function Filters(props: FiltersProps) {
  const { className = '', isOpen, setIsOpen } = props;
  function handleClose() {
    setIsOpen(false);
  }

  const ratingItems = [];

  for (let i = 1; i <= 5; i++) {
    const stars = [];
    for (let j = 1; j <= i; j++) {
      stars.push(<Star />);
    }
    const item = (
      <li className={styles['filters__rating-item']}>
        <input type="checkbox" id={`star-${i}`} />
        <label htmlFor={`star-${i}`}>{stars}</label>
      </li>
    );
    ratingItems.push(item);
  }

  return (
    <div className={`${styles.filters} ${className} ${isOpen ? 'visible' : 'hidden'} `}>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <p className={styles.filters__title}>Filters</p>
          <button className={styles['filters__button-icon--close']} onClick={handleClose}></button>
        </div>
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <label htmlFor="price" className={styles.filters__title}>
            Price
          </label>
        </div>
        <input type="range" id="price" name="price" min="0" max="1000" />
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <p className={styles.filters__title}>Rating</p>
        </div>
        <ul className={styles['filters__rating-list']}>{ratingItems.reverse()}</ul>
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <p className={styles.filters__title}>Categories</p>
        </div>
        <ul className={styles['filters__categories-list']}>
          <li className={styles['filters__categories-item']}>
            <input type="checkbox" id="women-clothes" />
            <label htmlFor="women-clothes">Women's clothes</label>
          </li>
          <li className={styles['filters__categories-item']}>
            <input type="checkbox" id="men-clothes" />
            <label htmlFor="men-clothes">Men's clothes</label>
          </li>
          <li className={styles['filters__categories-item']}>
            <input type="checkbox" id="jewelery" />
            <label htmlFor="jewelery">Jewelery</label>
          </li>
        </ul>
      </div>
      <Button className={styles['filters__button']} text="Apply Filter" />
    </div>
  );
}

export default Filters;
