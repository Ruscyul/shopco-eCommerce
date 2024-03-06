import styles from './DressStyleSection.module.scss';

function DressStyle() {
  return (
    <section className={`${styles['dress-style']} container`}>
      <div className={styles['dress-style__content']}>
        <h2 className={styles['dress-style__title']}>Browse by dress style</h2>
        <div className={styles['dress-style__categories-list']}>
          <div className={styles['dress-style__categories-item']}>
            <h3 className={styles['dress-style__categories-item-title']}>Casual</h3>
          </div>
          <div className={styles['dress-style__categories-item']}>
            <h3 className={styles['dress-style__categories-item-title']}>Formal</h3>
          </div>
          <div className={styles['dress-style__categories-item']}>
            <h3 className={styles['dress-style__categories-item-title']}>Party</h3>
          </div>
          <div className={styles['dress-style__categories-item']}>
            <h3 className={styles['dress-style__categories-item-title']}>Gym</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
