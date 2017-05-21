import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { songsReducer } from '../core/songs/reducers';

import { SONGS_STATE_KEY } from '../core/songs/constants';

import { FLUSH_STATE } from './constants';

const appReducer = combineReducers({
  [SONGS_STATE_KEY]: songsReducer,
  form: formReducer,
});

export default (state, action) => {
  if (action.type === FLUSH_STATE) {
    return appReducer(null, action);
  }
  return appReducer(state, action);
};
