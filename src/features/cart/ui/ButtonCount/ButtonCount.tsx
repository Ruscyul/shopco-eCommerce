import { MouseEventHandler } from 'react';
import styles from './ButtonCount.module.scss';

interface ButtonCountProps {
  className: string;
  count: number;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
  onDecrement: MouseEventHandler<HTMLButtonElement>;
}

function ButtonCount(props: ButtonCountProps) {
  const { className, count, onIncrement, onDecrement } = props;
  return (
    <div className={`${className} ${styles['button-count']}`}>
      <button
        className={`${styles['button-count__operator']} ${styles['button-count__operator--minus']}`}
        onClick={onDecrement}
      >
        -
      </button>
      <div className={styles['button-count__result']}>{count}</div>
      <button
        className={`${styles['button-count__operator']} ${styles['button-count__operator--plus']}`}
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

export default ButtonCount;
