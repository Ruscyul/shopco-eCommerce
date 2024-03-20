import { ReactNode } from 'react';
import styles from './ButtonIcon.module.scss';

interface ButtonIconProps {
  className?: string;
  icon: '' | ReactNode;
  onClick?: () => void;
}

function ButtonIcon(props: ButtonIconProps) {
  const { className = '', icon, onClick } = props;
  return (
    <button onClick={onClick} className={`${styles['button-icon']} ${className}`}>
      {icon}
    </button>
  );
}

export default ButtonIcon;
