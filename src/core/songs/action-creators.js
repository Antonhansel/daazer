import { fetch } from '../../core/network/actions';
import { NETWORK_ERROR_GENERIC_MESSAGE } from '../network/constants';
import { setSongs, setNextQuery, setTotal } from './actions';

/**
 * Fetch the songs from the Deezer API
 *
 * @return {Function} thunk
 */
export function searchSongs(query) {
  return async function searchSongsThunk(dispatch) {
    const fetchData = {
      method: 'GET',
    };
    const response = await dispatch(fetch('search/track?q=' + encodeURIComponent(query), fetchData));
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
    dispatch(setNextQuery(body.next));
    dispatch(setTotal(body.total));
    return false;
  };
}
