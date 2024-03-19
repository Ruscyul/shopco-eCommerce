import { useDispatch, useSelector } from 'react-redux';
import { changeSorting, selectCurrentSorting, sortingOptions } from '../sortBySlice';
import styles from './SortBy.module.scss';
import { ChangeEvent } from 'react';

function SortBy() {
  const currentSorting = useSelector(selectCurrentSorting);
  const dispatch = useDispatch();

  function handleSortingChange(event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeSorting(event.target.value));
  }

  return (
    <div className={styles['sortBy']}>
      <label htmlFor="sortBy" className={styles['sortBy__label']}>
        Sort By:
      </label>
      <select
        name="sortBy"
        id="sortBy"
        value={currentSorting}
        onChange={handleSortingChange}
        className={styles['sortBy__select']}
      >
        {Object.values(sortingOptions).map((option) => {
          return (
            <option value={option.name} className={styles['sortBy__option']} key={option.name}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortBy;
