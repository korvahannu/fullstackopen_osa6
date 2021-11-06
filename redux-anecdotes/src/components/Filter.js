import React from "react";

import { changeFilter } from "../reducers/filterReducer";
import { connect } from 'react-redux';

const Filter = (props) => {

  const handleFilterChange = (event) => {
    props.changeFilter(event.target.value);
  }

  return(
    <div>
      filter <input type='text' onChange={handleFilterChange} />
    </div>
  );
};



export default connect(null, {changeFilter})(Filter);