import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { PropTypes } from 'prop-types';
import './Datagrid.css';


class Datagrid extends React.Component {
  constructor(props) {
    super(props);
    this.rowGetter = this.rowGetter.bind(this);
    this.state = {
      calledMoreRowsAtSize: 0
    };
  }

  rowGetter(i) {
    return this.props.songs[i];
  }

  getColumns(song) {
    return Object.keys(song).map((key) => {
      return {
        key,
        name: key.toUpperCase(),
        sortable: true,
        filterable: true,
        resizable: true,
      };
    });
  }

  render() {
    const { songs, onGridSort } = this.props;
    if (songs.length > 0) {
      return (
          <ReactDataGrid
            columns={this.getColumns(songs[0])}
            rowGetter={this.rowGetter}
            rowsCount={songs.length}
            minHeight={1000}
            onGridSort={onGridSort}
          />
      );
    }
    return null;
  }
};

Datagrid.propTypes = {
  songs: PropTypes.array.isRequired,
  onBottomReached: PropTypes.func.isRequired,
  onGridSort: PropTypes.func.isRequired,
};

export default Datagrid;
