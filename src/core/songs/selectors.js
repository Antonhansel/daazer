import { SONGS_STATE_KEY } from './constants';

export function getSongs(state) {
  return state[SONGS_STATE_KEY] && state[SONGS_STATE_KEY].songs;
}
