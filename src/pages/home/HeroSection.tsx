import styles from './HeroSection.module.scss';
import Button from '../../shared/ui/button/Button';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
      <section className={`${styles['hero']} `}>
        <div className={`${styles['hero__inner']} container`}>
          <div className={`${styles['hero__content']}`}>
            <h1 className={styles['hero__title']}>Find clothes that matches your style</h1>
            <p className={styles['hero__text']}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>
            <Link to={'/shopco-eCommerce/shop'}>
              <Button className={styles['hero__button']} text="Shop Now" />
            </Link>
            <ul className={styles['hero__list']}>
              <li className={styles['hero__item']}>
                <p className={styles['hero__item-details']}>
                  <span className={styles['hero__item-accent']}>200+</span>
                  <br />
                  Interantional Brands
                </p>
              </li>
              <li className={styles['hero__item']}>
                <p className={styles['hero__item-details']}>
                  <span className={styles['hero__item-accent']}>2,000+</span>
                  <br />
                  High-Quality Products
                </p>
              </li>
              <li className={styles['hero__item']}>
                <p className={styles['hero__item-details']}>
                  <span className={styles['hero__item-accent']}>30,000+</span>
                  <br />
                  Happy Customers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles['hero__background-image']}></div>
    </>
  );
}

export default HeroSection;
