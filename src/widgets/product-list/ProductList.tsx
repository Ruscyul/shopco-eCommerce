import ProductCard from '../../entities/product/ui/ProductCard';
import styles from './ProductList.module.scss';
import { useMemo } from 'react';
import { useGetProductsQuery } from '../../shared/api/apiSlice';
import { useSelector } from 'react-redux';
import { selectAllFilters } from '../../features/filters/filtersSlice';
import { selectCurrentSorting, sortingOptions } from '../../features/sort-by/sortBySlice';

function ProductList() {
  const { data: products = [], isFetching, isSuccess, isError } = useGetProductsQuery();
  const filters = useSelector(selectAllFilters);
  const currentSorting = useSelector(selectCurrentSorting);

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

  const sortedProducts = [...filteredProducts];

  switch (currentSorting) {
    case sortingOptions.priceAsc.name:
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case sortingOptions.priceDesc.name:
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case sortingOptions.popularityAsc.name:
      sortedProducts.sort((a, b) => a.rating.count - b.rating.count);
      break;
    case sortingOptions.popularityDesc.name:
      sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
      break;
  }

  return (
    <>
      {isSuccess && (
        <div className={styles['product-list']}>
          {sortedProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
      {isSuccess && sortedProducts.length === 0 && <p>No products found</p>}
      {isFetching && <p>Loading...</p>}
      {isError && <p>Error loading products</p>}
    </>
  );
}

export default ProductList;
