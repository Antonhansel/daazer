import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { PropTypes } from 'prop-types';
import './Datagrid.css';
import formatters from './formatters';
import 'bootstrap/dist/css/bootstrap.css';
import { Toolbar, Data } from 'react-data-grid-addons';
import InfiniteScroll from 'react-infinite-scroller';

class Datagrid extends React.Component {
  constructor(props) {
    super(props);
    this.rowGetter = this.rowGetter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getSize = this.getSize.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);
    this.state = {
      calledMoreRowsAtSize: 0
    };
  }

  rowGetter(i) {
    return this.props.rows[i];
  }

  getRows() {
    return Data.Selectors.getRows(this.state);
  }

  getSize() {
    return this.getRows().length;
  }

  handleFilterChange(filter) {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  }

  onClearFilters() {
    // all filters removed
    this.setState({ filters: {} });
  }

  getColumns(song) {
    return Object.keys(song).map((key) => {
      return {
        key,
        name: key.toUpperCase(),
        sortable: true,
        filterable: true,
        resizable: true,
        formatter: formatters[key] || null,
      };
    });
  }

  render() {
    const { rows, onGridSort, onBottomReached, hasMore } = this.props;
    if (rows.length > 0) {
      return (
        <InfiniteScroll
          loadMore={onBottomReached}
          pageStart={0}
          hasMore={hasMore}
          threshold={250}
        >
          <ReactDataGrid
            columns={this.getColumns(rows[0])}
            rowGetter={this.rowGetter}
            rowsCount={rows.length}
            minHeight={rows.length * 70}
            rowHeight={70}
            onGridSort={onGridSort}
            toolbar={<Toolbar enableFilter={true}/>}
            onAddFilter={this.handleFilterChange}
            onClearFilters={this.onClearFilters}
          />
        </InfiniteScroll>
      );
    }
    return null;
  }
};

Datagrid.propTypes = {
  rows: PropTypes.array.isRequired,
  onBottomReached: PropTypes.func.isRequired,
  onGridSort: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Datagrid;
