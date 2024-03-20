import styles from './CartProductList.module.scss';
import CartProductCard from '../../../entities/cart-product-card/CartProductCard';
import { useGetCartProducts } from '../model/useGetCartProducts';
import ButtonDelete from '../../../features/cart/ui/ButtonDelete/ButtonDelete';
import ButtonCount from '../../../features/cart/ui/ButtonCount/ButtonCount';
import { useDispatch } from 'react-redux';
import { decrementCount, deleteFromCart, incrementCount } from '../../../features/cart/cartSlice';

function CartProductList() {
  const cartProducts = useGetCartProducts();
  console.log(cartProducts);

  const dispatch = useDispatch();

  function handleDeleteFromCart(id: number) {
    dispatch(deleteFromCart({ id }));
  }

  function handleIncrementCount(id: number) {
    dispatch(incrementCount({ id }));
  }

  function handleDecrementCount(id: number) {
    dispatch(decrementCount({ id }));
  }

  return (
    <div className={styles['cart-product-list']}>
      {cartProducts.length === 0 && <p className={styles['cart-product-list__message']}>Cart is empty...</p>}
      {cartProducts?.map((product) => (
        <CartProductCard
          product={product}
          key={product.id}
          deleteButton={
            <ButtonDelete className={'product-card__delete-button'} onClick={() => handleDeleteFromCart(product.id)} />
          }
          countButton={
            <ButtonCount
              className={'product-card__count-button'}
              count={product.count}
              onIncrement={() => handleIncrementCount(product.id)}
              onDecrement={() => handleDecrementCount(product.id)}
            />
          }
        />
      ))}
    </div>
  );
}

export default CartProductList;
