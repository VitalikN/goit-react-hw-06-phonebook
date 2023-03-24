import React from 'react';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getFilterValue } from 'redux/selectors';
import { filterContact } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilter = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <div>
      <label>
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
