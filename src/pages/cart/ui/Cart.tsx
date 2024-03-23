import CartProductList from '../../../widgets/cart-product-list/ui/CartProductList';
import OrderSummary from '../../../widgets/order-summary/OrderSummary';
import { useGetCartProducts } from '../model/useGetCartProducts';
import styles from './Cart.module.scss';

function Cart() {
  const cartProducts = useGetCartProducts();

  return (
    <div className={styles['cart']}>
      <div className={`${styles['cart__inner']} container`}>
        <h2 className={styles['cart__title']}>Your cart</h2>
        <div className={styles['cart__content']}>
          <CartProductList cartProducts={cartProducts} />
          <OrderSummary cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
