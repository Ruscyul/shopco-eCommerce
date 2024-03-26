import { ReactNode } from 'react';
import styles from './ButtonIcon.module.scss';

interface ButtonIconProps {
  className?: string;
  icon: '' | ReactNode;
  border?: boolean;
  helperText: string;
  disabled?: boolean;
  onClick?: () => void;
}

function ButtonIcon(props: ButtonIconProps) {
  const { className = '', icon, border = false, helperText, disabled = false, onClick } = props;
  return (
    <button
      onClick={onClick}
      title={helperText}
      disabled={disabled}
      className={`${styles['button-icon']} ${className} ${border ? styles['button-icon--border'] : ''}`}
    >
      <span className="visually-hidden">{helperText}</span>
      {icon}
    </button>
  );
}

export default ButtonIcon;
