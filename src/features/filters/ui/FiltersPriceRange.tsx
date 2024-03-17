import { ChangeEvent, useState } from 'react';
import styles from './FiltersPriceRange.module.scss';

interface FiltersPriceRangeProps {
  min: number;
  max: number;
  step: number;
}

function FiltersPriceRange(props: FiltersPriceRangeProps) {
  const { min, max, step } = props;

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  function handleMinChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
  }

  function handleMaxChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
  }

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={styles['price-range']}>
      <div className={styles['price-range__track']}>
        <div className={styles['price-range__bar']} style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}></div>
      </div>

      <div className={styles['price-range__inputs']}>
        <input
          type="range"
          className={styles['price-range__input']}
          min={min}
          max={max}
          value={minValue}
          step={step}
          onChange={handleMinChange}
        />
        <input
          type="range"
          className={styles['price-range__input']}
          min={min}
          max={max}
          value={maxValue}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className={styles['price-range__price-output']}>
        <div>{`$${minValue}`}</div>
        <div>{`$${maxValue}`}</div>
      </div>
    </div>
  );
}

export default FiltersPriceRange;
