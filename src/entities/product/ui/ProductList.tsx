import { Product } from '../../../shared/types';
import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles['product-list']}>
      {products.map((product: Product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
