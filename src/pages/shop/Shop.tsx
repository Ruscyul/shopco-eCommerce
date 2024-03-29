import ProductList from '../../widgets/product-list/ProductList';
import ButtonIcon from '../../shared/ui/button-icon/ButtonIcon';
import Filters from '../../widgets/filters/Filters';
import FiltersIcon from '../../shared/assets/icons/filters.svg?react';
import styles from './Shop.module.scss';
import { useState } from 'react';
import SortBy from '../../features/sort-by/ui/SortBy';

function Shop() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  function handleClick() {
    setIsFiltersOpen(true);
  }

  return (
    <div className={styles.shop}>
      <div className={`${styles['shop__inner']} container`}>
        <div className={styles.shop__heading}>
          <div className={styles['shop__heading-inner']}>
            <p className={styles['shop__product-count']}>Showing 1-10 of 100 Products</p>
            <SortBy />
          </div>
          <ButtonIcon
            icon={<FiltersIcon />}
            helperText={'Show filters'}
            className={styles['shop__button-icon-filters']}
            onClick={handleClick}
          />
        </div>
        <div className={styles['shop__content']}>
          <Filters className={styles['shop__filters']} isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen} />
          <div className={styles['shop__products-list']}>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
