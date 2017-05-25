import { SONGS_STATE_KEY } from './constants';

export function getSongs(state) {
  return state[SONGS_STATE_KEY] && state[SONGS_STATE_KEY].songs;
}

export function getNext(state) {
  return state[SONGS_STATE_KEY] && state[SONGS_STATE_KEY].next;
}

export function getSortConfig(state) {
  return state[SONGS_STATE_KEY] && state[SONGS_STATE_KEY].sortConfig;
}

export function getTotal(state) {
  return state[SONGS_STATE_KEY] && state[SONGS_STATE_KEY].total;
}
