import styles from './Button.module.scss';

interface ButtonProps {
  className: string;
  text: string;
  size?: 'button--small';
  color?: 'button--transparent' | 'button--light';
}

function Button(props: ButtonProps) {
  const { className = '', text = '', size = '', color = '' } = props;

  return <button className={`${styles.button} ${className} ${styles[color]} ${styles[size]}`}>{text}</button>;
}

export default Button;
