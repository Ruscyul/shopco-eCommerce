import styles from './CategoriesSection.module.scss';

function CategoriesSection() {
  return (
    <section className={`${styles['categories']} container`}>
      <div className={styles['categories__content']}>
        <h2 className={styles['categories__title']}>Browse by category</h2>
        <div className={styles['categories__list']}>
          <div className={styles['categories__item']}>
            <h3 className={styles['categories__item-title']}>Women's Clothing</h3>
          </div>
          <div className={styles['categories__item']}>
            <h3 className={styles['categories__item-title']}>Men's Clothing</h3>
          </div>
          <div className={styles['categories__item']}>
            <h3 className={styles['categories__item-title']}>Jewelery</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
