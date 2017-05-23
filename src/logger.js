import reduxLogger from 'redux-logger';

export default function createLogger() {
  return reduxLogger({
    collapsed: true,
    predicate: (getState, action) => action.type.indexOf('@@redux-form') === -1,
  });
}
