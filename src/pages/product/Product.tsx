import { useParams } from 'react-router-dom';
import ButtonCount from '../../features/cart/ui/ButtonCount/ButtonCount';
import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from '../../shared/api/apiSlice';
import Button from '../../shared/ui/button/Button';
import styles from './Product.module.scss';
import { getStars } from '../../shared/model/getStars';
import Loader from '../../shared/ui/loader/Loader';
import { reviewData } from '../../entities/review/model/reviewData';
import ReviewCard from '../../entities/review/ui/ReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCount, incrementCount, selectCartProductsId } from '../../features/cart/cartSlice';
import { ProductType } from '../../shared/types';
import { useState } from 'react';
import ProductCard from '../../entities/product/ui/ProductCard';
import { skipToken } from '@reduxjs/toolkit/query';

function Product() {
  const { id } = useParams();
  const { data: product, isSuccess, isLoading, isError } = useGetProductByIdQuery(id);
  const {
    data: categoryProducts,
    isSuccess: isCategoryProductsSuccess,
    isError: isCategoryProductsError,
  } = useGetProductsByCategoryQuery(isSuccess ? product.category : skipToken);

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

  const TABS = {
    details: 'details',
    reviews: 'reviews',
    faqs: 'faqs',
  };

  const [activeTab, setActiveTab] = useState(TABS.reviews);

  return (
    <>
      {isError && <p>Error loading product. Try again!</p>}
      {isLoading && <Loader className={styles['product__loader']} />}
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
              <button
                onClick={() => setActiveTab(TABS.details)}
                className={`${styles['product__tabs-button']} ${activeTab === TABS.details ? styles['product__tabs-button--active'] : ''}`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab(TABS.reviews)}
                className={`${styles['product__tabs-button']} ${activeTab === TABS.reviews ? styles['product__tabs-button--active'] : ''}`}
              >
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab(TABS.faqs)}
                className={`${styles['product__tabs-button']} ${activeTab === TABS.faqs ? styles['product__tabs-button--active'] : ''}`}
              >
                FAQs
              </button>
            </div>

            <div
              onClick={() => setActiveTab(TABS.reviews)}
              className={`${styles['product__tab-content']} ${activeTab === TABS.reviews ? styles['product__tab-content--active'] : ''}`}
            >
              <div className={styles['product__tab-heading']}>
                <div className={styles['product__tab-title']}>
                  <h3 className={styles['product__tab-name']}>All Reviews</h3>
                  <p className={styles['product__tab-count']}>({reviewData.length})</p>
                </div>
                <div className={styles['product__tab-buttons']}>
                  <Button text="Write a Review" className={styles['product__tab-write-button']} disabled />
                </div>
              </div>
              <div className={styles['product__tab-reviews']}>
                {reviewData.map((review) => (
                  <ReviewCard review={review} key={review.id} />
                ))}
              </div>
              <Button
                className={styles['product__tab-more-button']}
                text="Load More Reviews"
                color="button--transparent"
                size="button--small"
                disabled
              />
            </div>

            <div
              data-tab={TABS.details}
              className={`${styles['product__tab-content']} ${activeTab === TABS.details ? styles['product__tab-content--active'] : ''}`}
            >
              <div className={styles['product__tab-heading']}>
                <h3 className={styles['product__tab-title']}>Product Details</h3>
              </div>
              <div className={styles['product__tab-details']}>No data</div>
            </div>

            <div
              data-tab={TABS.faqs}
              className={`${styles['product__tab-content']} ${activeTab === TABS.faqs ? styles['product__tab-content--active'] : ''}`}
            >
              <div className={styles['product__tab-heading']}>
                <h3 className={styles['product__tab-title']}>FAQs</h3>
              </div>
              <div className={styles['product__tab-faq']}>No data</div>
            </div>

            <div className={styles['product__suggestions']}>
              {isCategoryProductsError && <></>}
              {isCategoryProductsSuccess && (
                <>
                  <h2 className={styles['product__suggestions-title']}>You might also like</h2>
                  <div className={styles['product__suggestions-list']}>
                    {categoryProducts
                      .filter(
                        (categoryProduct: ProductType) =>
                          categoryProduct.id !== product.id && categoryProduct.category === product.category,
                      )
                      .map((categoryProduct: ProductType) => (
                        <ProductCard
                          product={categoryProduct}
                          key={categoryProduct.id}
                          className={styles['product__suggestions-product']}
                        />
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
