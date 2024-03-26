import styles from './Footer.module.scss';
import Logo from '../../shared/ui/logo/Logo';
import ButtonIcon from '../../shared/ui/button-icon/ButtonIcon';
import TwitterIcon from '../../shared/assets/icons/twitter.svg?react';
import FacebookIcon from '../../shared/assets/icons/facebook.svg?react';
import InstagramIcon from '../../shared/assets/icons/instagram.svg?react';
import GithubIcon from '../../shared/assets/icons/github.svg?react';
import Badge from '../../shared/ui/badge/Badge';
import VisaIcon from '../../shared/assets/icons/visa.svg?react';
import MastercardIcon from '../../shared/assets/icons/mastercard.svg?react';
import PayPalIcon from '../../shared/assets/icons/paypal.svg?react';
import ApplePayIcon from '../../shared/assets/icons/apple-pay.svg?react';
import GPayIcon from '../../shared/assets/icons/g-pay.svg?react';
import Input from '../../shared/ui/input/Input';
import Button from '../../shared/ui/button/Button';
import letterIcon from '../../shared/assets/icons/letter.svg';

const menuItems = [
  {
    title: 'Company',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'Help',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'Faq',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'Resources',
    links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  },
];

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={`${styles['footer__inner']} container`}>
        <div className={styles['footer__subscribe']}>
          <p className={styles['footer__subscribe-title']}>Stay up to date about our latest offers</p>
          <div className={styles['footer__subscribe-block']}>
            <Input
              text="Enter your email address"
              icon={letterIcon}
              className={styles['footer__subscribe-input']}
              disabled
            />
            <Button
              color="button--light"
              text="Subscribe to Newsletter"
              className={styles['footer__subscribe-button']}
              disabled
            />
          </div>
        </div>

        <div className={styles['footer__heading']}>
          <Logo className={styles['footer__logo']} />
          <p className={styles['footer__text']}>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className={styles['footer__social-links']}>
            <ButtonIcon
              icon={<TwitterIcon />}
              helperText="Twitter"
              disabled
              border
              className={styles['footer__social-button']}
            />
            <ButtonIcon
              icon={<FacebookIcon />}
              helperText="Facebook"
              disabled
              border
              className={styles['footer__social-button']}
            />
            <ButtonIcon
              icon={<InstagramIcon />}
              helperText="Instagram"
              disabled
              border
              className={styles['footer__social-button']}
            />
            <ButtonIcon
              icon={<GithubIcon />}
              helperText="Github"
              disabled
              border
              className={styles['footer__social-button']}
            />
          </div>
        </div>
        {menuItems.map((item) => (
          <div className={styles['footer__menu-block']}>
            <p className={styles['footer__menu-title']}>{item.title}</p>
            <ul className={styles['footer__menu-list']}>
              {item.links.map((link) => (
                <li className={styles['footer__menu-item']}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles['footer__footer']}>
          <p className={styles['footer__copyright']}>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className={styles['footer__badges']}>
            <Badge icon={<VisaIcon />} />
            <Badge icon={<MastercardIcon />} />
            <Badge icon={<PayPalIcon />} />
            <Badge icon={<ApplePayIcon />} />
            <Badge icon={<GPayIcon />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
