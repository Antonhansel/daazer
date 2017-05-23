import { FETCH } from './constants';
import { apiUrl } from '../../config';

/**
 * Wrapper around fetch action
 */
async function executeFetchAction(state, next, action) {
  try {
    const url = apiUrl + action.url;
    const finalParams = Object.assign({}, action.data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Fetching', url, 'with', finalParams);
    const response = await fetch(url, finalParams);
    console.log('-> ', url, ': ', response.status);
    if (response.status !== 401) {
      const json = response.json;
      response.json = () => json.call(response)
        .then((body) => {
          console.log('-> ', url, ': ', body);
          return body;
        });
      return response;
    }
  } catch (error) {
    console.log('Request failed:', error);
    throw error;
  }
  return false;
}

/**
 * Middleware for handling network calls
 *
 * @returns {Function} redux middleware
 */
export const networkMiddleware = () => store => next => (action = {}) => {
  switch (action.type) {
    case FETCH:
      return executeFetchAction(store.getState(), next, action);
    default:
      return next(action);
  }
};
