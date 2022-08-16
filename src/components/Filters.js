import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <section className="filters">
        <p>Search card</p>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleFilter }
          placeholder="card"
        />
        {/* <label htmlFor="selectFilter">
          <select
            onChange={ handleFilter }
            id="selectFilter"
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label> */}
      </section>
    );
  }
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
