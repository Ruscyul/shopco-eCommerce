import Input from '../../shared/ui/input/Input';
import styles from './OrderSummary.module.scss';
import PriceTagIcon from '../../shared/assets/icons/price-tag.svg';
import Button from '../../shared/ui/button/Button';
import { Product } from '../../shared/types';

interface OrderSummaryProps {
  cartProducts: Product[];
}

function OrderSummary(props: OrderSummaryProps) {
  const { cartProducts } = props;

  const subtotalSum = cartProducts.reduce((sum, product) => sum + product.price * product.count, 0);
  const discount = 0;
  const deliveryFee = subtotalSum > 0 ? 15 : 0;
  const totalSum = subtotalSum - discount - deliveryFee;

  return (
    <>
      {cartProducts.length > 0 && (
        <div className={styles['order-summary']}>
          <p className={styles['order-summary__title']}>Order Summary</p>
          <div className={styles['order-summary__price-summary']}>
            <div className={styles['order-summary__price-info']}>
              <p className={styles['order-summary__price-category']}>Subtotal</p>
              <p className={styles['order-summary__price']}>{`$${subtotalSum.toFixed(2)}`}</p>
            </div>
            <div className={styles['order-summary__price-info']}>
              <p className={styles['order-summary__price-category']}>Discount</p>
              <p className={styles['order-summary__price']}>{`$${discount.toFixed(2)}`}</p>
            </div>
            <div className={styles['order-summary__price-info']}>
              <p className={styles['order-summary__price-category']}>Delivery Fee</p>
              <p className={styles['order-summary__price']}>{`$${deliveryFee.toFixed(2)}`}</p>
            </div>
            <div className={styles['order-summary__price-info']}>
              <p>Total</p>
              <p
                className={`${styles['order-summary__price']} ${styles['order-summary__price--total']}`}
              >{`$${totalSum.toFixed(2)}`}</p>
            </div>
          </div>
          <div className={styles['order-summary__promo-code']}>
            <Input
              className={styles['order-summary__promo-code-input']}
              text={'Add promo code'}
              icon={PriceTagIcon}
              disabled
            />
            <Button className={styles['order-summary__promo-code-button']} text="Apply" disabled />
          </div>
          <Button className={styles['order-summary__checkout-button']} text="Go to Checkout →" disabled />
        </div>
      )}
    </>
  );
}

export default OrderSummary;
