import { SET_SONGS } from './constants';

export function setSongs(songs) {
 return {
   type: SET_SONGS,
   songs,
 };
}
