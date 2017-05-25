import { fetch } from '../../core/network/actions';
import { NETWORK_ERROR_GENERIC_MESSAGE } from '../network/constants';
import { setSongs, setNextQuery, setTotal } from './actions';
import { getNext, getSongs, getSortConfig } from './selectors';
import { ORDER_DESC } from './constants';

/**
 * Fetch the songs from the Deezer API
 *
 * @return {Function} thunk
 */
export function searchSongs(params) {
  return async function searchSongsThunk(dispatch, getState) {
    const state = getState();
    let nextQuery = getNext(state);
    const fetchData = {
      method: 'GET',
    };
    let response;
    if (!params.next) {
      response = await dispatch(fetch('search/track?q=' + encodeURIComponent(params.query), fetchData));
    } else if (nextQuery) {
      response = await dispatch(fetch(nextQuery, fetchData));
    } else {
      return;
    }
    if (response.status !== 200) {
      throw new Error(NETWORK_ERROR_GENERIC_MESSAGE);
    }

    const body = await response.json();
    body.data = body.data.map((song) => {
      let newSong = Object.assign({}, song, {
        albumTitle: song.album.title,
        artistName: song.artist.name,
      });
      delete newSong.album;
      delete newSong.artist;
      delete newSong.readable;
      delete newSong.title_short;
      delete newSong.title_version;
      delete newSong.explicit_lyrics;
      return newSong;
    })
    dispatch(setSongs(body.data));
    nextQuery = body.next ? body.next.split('http://api.deezer.com/')[1] : null;
    dispatch(setNextQuery(nextQuery));
    dispatch(setTotal(body.total));
    return false;
  };
}

/**
 * Sort results
 *
 * @return {Function} thunk
 */
export function sortResults() {
  return async function sortResultsThunk(dispatch, getState) {
    const state = getState();
    const sortConfig = getSortConfig(state);
    let songs = getSongs(state);
    songs.sort(function(a, b) {
      if (sortConfig.order === ORDER_DESC) {
        if (a[sortConfig.column] < b[sortConfig.column]) {
          return -1;
        }
        else {
          return 1;
        }
      }
      else {
        if (a[sortConfig.column] < b[sortConfig.column]) {
          return 1;
        }
        else {
          return -1;
        }
      }
    });
    dispatch(setSongs(songs));
    return false;
  };
}
