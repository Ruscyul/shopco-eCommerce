import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  text?: string;
  type?: string;
  icon?: string;
  disabled?: boolean;
}

function Input(props: InputProps) {
  const { className = '', text = '', type = 'text', icon = '', disabled = false } = props;

  return (
    <div className={`${styles['input-container']} ${className}`}>
      <img src={icon} alt="" className={styles['input-icon']} />
      <input className={styles['input-field']} type={type} placeholder={text} disabled={disabled} />
    </div>
  );
}

export default Input;
