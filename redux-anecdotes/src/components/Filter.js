import React from "react";

import { useDispatch } from 'react-redux';
import { changeFilter } from "../reducers/filterReducer";

const Filter = (props) => {

  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  }

  return(
    <div>
      filter <input type='text' onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;