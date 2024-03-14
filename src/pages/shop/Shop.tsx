import ProductList from '../../entities/product/ui/ProductList';
import { useGetProductsQuery } from '../../shared/api/apiSlice';
import ButtonIcon from '../../shared/ui/button-icon/ButtonIcon';
import Filters from '../../widgets/filters/Filters';
import FiltersIcon from '../../shared/assets/icons/filters.svg?react';
import styles from './Shop.module.scss';
import { useState } from 'react';

function Shop() {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  function handleClick() {
    setIsFiltersOpen(true);
  }

  return (
    <div className={styles.shop}>
      <div className={`${styles['shop__inner']} container`}>
        <div className={styles.shop__heading}>
          <p className={styles['shop__product-count']}>Showing 1-10 of 100 Products</p>
          <ButtonIcon className={styles['shop__button-icon-filters']} icon={<FiltersIcon />} onClick={handleClick} />
        </div>
        <div className={styles['shop__content']}>
          <Filters className={styles['shop__filters']} isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen} />
          <div className={styles['shop__products-list']}>
            {isSuccess && <ProductList products={data} />}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading products</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
