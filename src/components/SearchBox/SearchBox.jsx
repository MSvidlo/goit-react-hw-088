import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import {changeFilter} from '../../redux/filtersSlice'
import { useId } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(state => state.filters.name);
  const inputId = useId();
   

  const handleChange = e => {
     e.preventDefault();
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        type="text"
        id="search"
        name="filter"
        value={selectNameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;