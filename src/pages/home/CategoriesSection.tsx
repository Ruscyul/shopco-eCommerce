import { Link } from 'react-router-dom';
import styles from './CategoriesSection.module.scss';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../features/filters/filtersSlice';
import { CATEGORIES } from '../../shared/const';

function CategoriesSection() {
  const dispatch = useDispatch();

  function handleCategoryClick(category: string) {
    dispatch(updateFilters({ categories: [category] }));
  }

  return (
    <section className={`${styles['categories']} container`}>
      <div className={styles['categories__content']}>
        <h2 className={styles['categories__title']}>Browse by category</h2>
        <div className={styles['categories__list']}>
          <Link
            to={'/shopco-eCommerce/shop'}
            className={styles['categories__item-link']}
            onClick={() => handleCategoryClick(CATEGORIES.womenClothing)}
          >
            <div className={`${styles['categories__item']} ${styles['categories__item--women']}`}>
              <h3 className={styles['categories__item-title']}>Women</h3>
            </div>
          </Link>
          <Link
            to={'/shopco-eCommerce/shop'}
            className={styles['categories__item-link']}
            onClick={() => handleCategoryClick(CATEGORIES.menClothing)}
          >
            <div className={`${styles['categories__item']} ${styles['categories__item--men']}`}>
              <h3 className={styles['categories__item-title']}>Men</h3>
            </div>
          </Link>
          <Link
            to={'/shopco-eCommerce/shop'}
            className={styles['categories__item-link']}
            onClick={() => handleCategoryClick(CATEGORIES.jewelery)}
          >
            <div className={`${styles['categories__item']}`}>
              <h3 className={styles['categories__item-title']}>Jewelery</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
