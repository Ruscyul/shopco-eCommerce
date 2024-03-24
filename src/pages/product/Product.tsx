import { useParams } from 'react-router-dom';
import ButtonCount from '../../features/cart/ui/ButtonCount/ButtonCount';
import { useGetProductByIdQuery } from '../../shared/api/apiSlice';
import Button from '../../shared/ui/button/Button';
import styles from './Product.module.scss';
import { getStars } from '../../shared/model/getStars';
import Loader from '../../shared/ui/loader/Loader';
import { reviewData } from '../../entities/review/model/reviewData';
import ButtonIcon from '../../shared/ui/button-icon/ButtonIcon';
import FiltersIcon from '../../shared/assets/icons/filters.svg?react';
import ReviewCard from '../../entities/review/ui/ReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCount, incrementCount, selectCartProductsId } from '../../features/cart/cartSlice';
import { ProductType } from '../../shared/types';

function Product() {
  const { id } = useParams();
  const { data: product, isSuccess, isLoading, isError } = useGetProductByIdQuery(id);
  const cartProductsId = useSelector(selectCartProductsId);

  function getCount(product: ProductType) {
    const cartProductIndex = cartProductsId.findIndex((id) => id.id === product.id);
    return cartProductIndex != -1 ? cartProductsId[cartProductIndex].count : 0;
  }

  const dispatch = useDispatch();

  function handleAddToCart(id: number) {
    dispatch(addToCart({ id }));
  }

  function handleIncrementCount(id: number) {
    dispatch(incrementCount({ id }));
  }

  function handleDecrementCount(id: number) {
    dispatch(decrementCount({ id }));
  }

  return (
    <>
      {isSuccess && (
        <div className={styles['product']}>
          <div className={`${styles['product__inner']} container`}>
            <div className={styles['product__card']}>
              <div className={styles['product__image-container']}>
                <img className={styles['product__image']} src={product.image} alt="" />
              </div>
              <div className={styles['product__content']}>
                <h2 className={styles['product__title']}>{product.title}</h2>
                <div className={styles['product__rating']}>
                  <div className={styles['product__rating-stars']}>{getStars(product.rating.rate)}</div>
                  <p className={styles['product__rating-numbers']}>
                    <span className={styles['product__rating-numbers-accent']}>{product.rating.rate}/</span>5
                  </p>
                </div>
                <p className={styles['product__price']}>{`$${product.price}`}</p>
                <p className={styles['product__description']}>{product.description}</p>
                <div className={styles['product__buttons']}>
                  <ButtonCount
                    count={getCount(product)}
                    onIncrement={() => handleIncrementCount(product.id)}
                    onDecrement={() => handleDecrementCount(product.id)}
                    className={styles['product__count-button']}
                  />
                  <Button
                    text="Add to Cart"
                    size="button--small"
                    onClick={() => handleAddToCart(product.id)}
                    className={styles['product__add-button']}
                  />
                </div>
              </div>
            </div>

            <div className={styles['product__tabs']}>
              <button className={styles['product__tabs-button']}>Product Details</button>
              <button className={styles['product__tabs-button']}>Rating & Reviews</button>
              <button className={styles['product__tabs-button']}>FAQs</button>
            </div>
            <div className={styles['product__tab-content']}>
              <div className={styles['product__tab-heading']}>
                <div className={styles['product__tab-title']}>
                  <h3 className={styles['product__tab-name']}>All Reviews</h3>
                  <p className={styles['product__tab-count']}>({reviewData.length})</p>
                </div>
                <div className={styles['product__tab-buttons']}>
                  <ButtonIcon icon={<FiltersIcon />} className={styles['product__tab-filters-button']} />
                  <Button text="Write a Review" className={styles['product__tab-write-button']} />
                </div>
              </div>
              <div className={styles['product__tab-reviews']}>
                {reviewData.map((review) => (
                  <ReviewCard review={review} />
                ))}
              </div>
              <Button
                className={styles['product__tab-more-button']}
                text="Load More Reviews"
                color="button--transparent"
                size="button--small"
              />
            </div>
            <div className={styles['product__suggestions']}>
              <h2 className={styles['product__suggestions-title']}>You might also like</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
