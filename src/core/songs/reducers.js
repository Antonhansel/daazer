import { SET_SONGS } from './constants';

const INITIAL_STATE = {
  songs: [],
};

function setSongs(state, action) {
  return Object.assign({}, state, action.songs);
}

const FUNCTION_BY_ACTION = {
  [SET_SONGS]: setSongs,
};


/**
 * @param   {Object} state  initial state
 * @param   {Object} action dispatched action
 * @returns {Object} state to return
 */
export function songsReducer(state = INITIAL_STATE, action = {}) {
  if (action && action.type in FUNCTION_BY_ACTION) {
    return FUNCTION_BY_ACTION[action.type](state, action);
  }
  return state;
}
