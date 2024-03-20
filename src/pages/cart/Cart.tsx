import CartProductList from '../../widgets/cart-product-list/ui/CartProductList';
import styles from './Cart.module.scss';

function Cart() {
  return (
    <div className={styles['cart']}>
      <div className={`${styles['cart__inner']} container`}>
        <h2 className={styles['cart__title']}>Your cart</h2>
        <CartProductList />
      </div>
    </div>
  );
}

export default Cart;
