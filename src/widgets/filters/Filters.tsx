import Button from '../../shared/ui/button/Button';
import styles from './Filters.module.scss';
import Star from '../../shared/assets/icons/star.svg?react';
import { ChangeEvent, useEffect, useState } from 'react';
import FiltersPriceRange from '../../shared/ui/price-range/ui/PriceRange';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, selectAllFilters, updateFilters } from '../../features/filters/filtersSlice';
import { CATEGORIES } from '../../shared/const';

interface FiltersProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}

function Filters(props: FiltersProps) {
  const { className = '', isOpen, setIsOpen } = props;

  const filters = useSelector(selectAllFilters);
  const [newFilters, setNewFilters] = useState(filters);

  useEffect(() => {
    setNewFilters(filters);
  }, [filters]);

  const dispatch = useDispatch();

  function handleRatingChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.dataset['rating']);
    setNewFilters({
      ...newFilters,
      minRating: newValue,
    });
  }

  function handlePriceChange(event: ChangeEvent<HTMLInputElement>, newPrice: number) {
    setNewFilters({
      ...newFilters,
      price: {
        ...newFilters.price,
        min: event.target.id === 'minPrice' ? Number(newPrice) : newFilters.price.min,
        max: event.target.id === 'maxPrice' ? Number(newPrice) : newFilters.price.max,
      },
    });
  }

  function handleCategoryCheck(event: ChangeEvent<HTMLInputElement>) {
    const categoryName = event.target.name;

    if (event.target.checked === true) {
      const updatedCategories = [...newFilters.categories, categoryName];
      setNewFilters({
        ...newFilters,
        categories: updatedCategories,
      });
    } else {
      const updatedCategories = newFilters.categories.filter((category) => category !== categoryName);
      setNewFilters({
        ...newFilters,
        categories: updatedCategories,
      });
    }
  }

  function handleApplyFilters() {
    dispatch(updateFilters(newFilters));
  }

  function handleResetFilters() {
    dispatch(resetFilters());
    setNewFilters(filters);
  }

  function handleCloseFilters() {
    setIsOpen(false);
  }

  const ratingItems = [];
  for (let i = 1; i <= 5; i++) {
    const stars = [];
    for (let j = 1; j <= i; j++) {
      stars.push(<Star />);
    }
    const item = (
      <li className={styles['filters__rating-item']} key={i}>
        <input
          type="radio"
          name="min-rating"
          id={`star-${i}`}
          data-rating={i}
          onChange={handleRatingChange}
          checked={newFilters.minRating === i}
        />
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
          <button
            className={styles['filters__button-icon--close']}
            onClick={handleCloseFilters}
            title="Close Filters"
          ></button>
          <button
            className={styles['filters__button-icon--reset']}
            onClick={handleResetFilters}
            title="Reset Filters"
          ></button>
        </div>
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <label htmlFor="price" className={styles.filters__title}>
            Price
          </label>
        </div>
        <FiltersPriceRange
          min={0}
          max={700}
          step={50}
          valueMin={newFilters.price.min}
          valueMax={newFilters.price.max}
          handlePriceChange={handlePriceChange}
        />
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <p className={styles.filters__title}>Minimum Rating</p>
        </div>
        <ul className={styles['filters__rating-list']}>{ratingItems.reverse()}</ul>
      </div>
      <div className={styles.filters__section}>
        <div className={styles.filters__heading}>
          <p className={styles.filters__title}>Categories</p>
        </div>
        <ul className={styles['filters__categories-list']}>
          <li className={styles['filters__categories-item']}>
            <input
              type="checkbox"
              id="women-clothes"
              name={CATEGORIES.womenClothing}
              onChange={handleCategoryCheck}
              checked={newFilters.categories.includes(CATEGORIES.womenClothing)}
            />
            <label htmlFor="women-clothes">Women's clothes</label>
          </li>
          <li className={styles['filters__categories-item']}>
            <input
              type="checkbox"
              id="men-clothes"
              name={CATEGORIES.menClothing}
              onChange={handleCategoryCheck}
              checked={newFilters.categories.includes(CATEGORIES.menClothing)}
            />
            <label htmlFor="men-clothes">Men's clothes</label>
          </li>
          <li className={styles['filters__categories-item']}>
            <input
              type="checkbox"
              id="jewelery"
              name={CATEGORIES.jewelery}
              onChange={handleCategoryCheck}
              checked={newFilters.categories.includes(CATEGORIES.jewelery)}
            />
            <label htmlFor="jewelery">Jewelery</label>
          </li>
        </ul>
      </div>
      <Button className={styles['filters__button']} text="Apply Filter" onClick={handleApplyFilters} />
    </div>
  );
}

export default Filters;
