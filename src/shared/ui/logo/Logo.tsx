import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

interface LogoProps {
  className?: string;
}

function Logo(props: LogoProps) {
  const { className } = props;

  return (
    <Link to={'/shopco-eCommerce/'} className={`${styles['logo']} ${className}`}>
      <img src={logo} alt="shop.co" className={`${styles['logo-image']} `} />
    </Link>
  );
}

export default Logo;
