import { ChangeEvent, useEffect, useState } from 'react';
import styles from './PriceRange.module.scss';
import { useSelector } from 'react-redux';
import { selectAllFilters } from '../../../../features/filters/filtersSlice';

interface PriceRangeProps {
  min: number;
  max: number;
  step: number;
  valueMin: number;
  valueMax: number;
  handlePriceChange: (arg0: ChangeEvent<HTMLInputElement>, arg1: number) => void;
}

function PriceRange(props: PriceRangeProps) {
  const { min, max, step, valueMin, valueMax, handlePriceChange } = props;

  const filters = useSelector(selectAllFilters);

  const [minValue, setMinValue] = useState(valueMin);
  const [maxValue, setMaxValue] = useState(valueMax);

  useEffect(() => {
    setMinValue(filters.price.min);
    setMaxValue(filters.price.max);
  }, [filters]);

  function handleMinChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
    handlePriceChange(event, newMinValue);
  }

  function handleMaxChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
    handlePriceChange(event, newMaxValue);
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
          id="minPrice"
          min={min}
          max={max}
          value={minValue}
          step={step}
          onChange={handleMinChange}
        />
        <input
          type="range"
          className={styles['price-range__input']}
          id="maxPrice"
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

export default PriceRange;
