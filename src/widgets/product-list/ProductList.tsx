import ProductCard from '../../entities/product/ui/ProductCard';
import styles from './ProductList.module.scss';
import { useMemo } from 'react';
import { useGetProductsQuery } from '../../shared/api/apiSlice';
import { useSelector } from 'react-redux';
import { selectAllFilters } from '../../features/filters/filtersSlice';

function ProductList() {
  const { data: products = [], isLoading, isSuccess, isError } = useGetProductsQuery();
  const filters = useSelector(selectAllFilters);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return filters.categories.length ? filters.categories.includes(product.category) : true;
      })
      .filter((product) => {
        return (
          product.price >= filters.price.min &&
          product.price <= filters.price.max &&
          product.rating.rate >= filters.minRating
        );
      });
  }, [products, filters]);

  return (
    <>
      {isSuccess && (
        <div className={styles['product-list']}>
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading products</p>}
    </>
  );
}

export default ProductList;
