import { connect } from 'react-redux';
import { getSongs } from '../../core/songs/selectors';

const emptyArray = [];

function mapStateToProps(state) {
  return {
    songs: getSongs(state) || emptyArray,
  };
}

function mapDispatchToProps() {
  return {};
}

export function containerFactory(component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps)(component);
}
