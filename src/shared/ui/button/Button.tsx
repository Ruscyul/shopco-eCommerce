import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  className: string;
  text: string;
  size?: 'button--small';
  color?: 'button--transparent' | 'button--light';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { className = '', text = '', size = '', color = '', onClick, disabled = false } = props;

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className} ${styles[color]} ${styles[size]}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
