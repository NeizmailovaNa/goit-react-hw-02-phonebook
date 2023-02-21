import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.css'

const Filter = props => {
  return (
    <form>
      <label>
        Find contacts by name:
        <input name="filter" onChange={props.onInputHendler}></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  onInputHendler: PropTypes.func.isRequired,
};

export default Filter;