import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { searchSongs } from '../../core/songs/action-creators';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchStarted: (fields) => {
      dispatch(searchSongs({ query: fields.query }));
    },
  };
}

export function containerFactory(component) {
  const ConnectedWrapper = connect(
    mapStateToProps,
    mapDispatchToProps)(component);
  return reduxForm({
    form: 'songSearch',
    fields: ['query'],
  })(ConnectedWrapper);
}
