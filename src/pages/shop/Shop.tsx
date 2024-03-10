import ProductList from '../../entities/product/ui/ProductList';
import { useGetProductsQuery } from '../../shared/api/apiSlice';
import styles from './Shop.module.scss';

function Shop() {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  return (
    <div className={styles.shop}>
      <div className={`${styles['shop__inner']} container`}>
        <div>breadcrumbs</div>
        <div className={styles['shop__products-list']}>
          <div>filters</div>
          <div>
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
