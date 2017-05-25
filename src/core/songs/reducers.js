import { SET_SONGS, SET_NEXT, SET_TOTAL, SET_SORT_CONFIG } from './constants';

const INITIAL_STATE = {
  songs: [],
  next: null,
  total: null,
  sortConfig: null,
};

function setSongs(state, action) {
  return Object.assign({}, state, {
    songs: action.songs}
  );
}

function setNextQuery(state, action) {
  return Object.assign({}, state, {
    next: action.next
  });
}

function setTotal(state, action){
  return Object.assign({}, state, {
    total: action.total
  });
}

function setSortConfig(state, action){
  return Object.assign({}, state, {
    sortConfig: action.sortConfig
  });
}

const FUNCTION_BY_ACTION = {
  [SET_SONGS]: setSongs,
  [SET_NEXT]: setNextQuery,
  [SET_TOTAL]: setTotal,
  [SET_SORT_CONFIG]: setSortConfig,
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
