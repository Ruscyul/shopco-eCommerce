import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ products }) {
  return (
    <div className={styles['product-list']}>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
