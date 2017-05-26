import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form'
import './SearchBar.css';

const SearchBar = ({
  handleSubmit,
  onSearchStarted,
}) => {
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit(onSearchStarted.bind(this))}>
        <Field
          component="input"
          id="query"
          type="text"
          name="query"
          className="input"
          placeholder="search songs..."
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchStarted: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
