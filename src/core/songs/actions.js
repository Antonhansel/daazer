import { SET_SONGS, SET_NEXT, SET_TOTAL, SET_SORT_CONFIG } from './constants';

export function setSongs(songs) {
 return {
   type: SET_SONGS,
   songs,
 };
}

export function setNextQuery(next) {
 return {
   type: SET_NEXT,
   next,
 };
}

export function setTotal(total) {
 return {
   type: SET_TOTAL,
   total,
 };
}

export function setSortConfig(sortConfig) {
 return {
   type: SET_SORT_CONFIG,
   sortConfig,
 };
}
