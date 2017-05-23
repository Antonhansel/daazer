import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { PropTypes } from 'prop-types';
import './Datagrid.css';

class Datagrid extends React.Component {
  constructor(props) {
    super(props);
    this.rowGetter = this.rowGetter.bind(this);
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
    const { songs } = this.props;

    if (songs.length > 0) {
      console.log(songs[0]);
      console.log(this.getColumns(songs[0]));
      return (
        <div>
          <ReactDataGrid
            columns={this.getColumns(songs[0])}
            rowGetter={this.rowGetter}
            rowsCount={songs.length}

            minHeight={500} />);
        </div>
      );
    }
    return null;
  }
};

Datagrid.propTypes = {
  songs: PropTypes.array.isRequired,
};

export default Datagrid;
