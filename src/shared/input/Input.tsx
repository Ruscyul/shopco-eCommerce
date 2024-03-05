import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  text?: string;
  type?: string;
  icon?: string;
}

function Input(props: InputProps) {
  const { className = '', text = '', type = 'text', icon = '' } = props;

  return (
    <div className={`${styles['input-container']} ${className}`}>
      <img src={icon} alt="" className={styles['input-icon']} />
      <input className={styles['input-field']} type={type} placeholder={text} />
    </div>
  );
}

export default Input;
