import { connect } from 'react-redux';
import { getSongs, getNext } from '../../core/songs/selectors';
import { searchSongs, sortResults } from '../../core/songs/action-creators';
import { setSortConfig } from '../../core/songs/actions';

/*
  Here we use a const empty array to prevent useless re-rendering of our component.
  songs: getSongs(state) || [], // <- This would re-rerender everytime
*/
const emptyArray = [];

function mapStateToProps(state) {
  return {
    rows: getSongs(state) || emptyArray,
    hasMore: !!getNext(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBottomReached: () => {
      dispatch(searchSongs({ next: true }));
    },
    onGridSort: (column, order) => {
      dispatch(setSortConfig({column, order}));
      dispatch(sortResults());
    }
  };
}

export function containerFactory(component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps)(component);
}
