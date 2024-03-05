import styles from './Button.module.scss';

interface ButtonProps {
  className: string;
  text: string;
}

function Button(props: ButtonProps) {
  const { className = '', text = '' } = props;

  return <button className={`${styles.button} ${className}`}>{text}</button>;
}

export default Button;
