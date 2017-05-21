import { FETCH } from './constants';

/**
 * Call an endpoint of the API
 */
export function fetch(url, data) {
  return {
    type: FETCH,
    url,
    data,
  };
}
