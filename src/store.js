import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { networkMiddleware } from './core/network/middlewares';
import createLogger from './logger';
import { env } from './config';

export default(initialState) => {
  const middleware = [thunk.withExtraArgument()];

  middleware.push(networkMiddleware());

  let enhancer;

  if (env !== 'production') {
    middleware.push(createLogger());
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(
      applyMiddleware(...middleware),
      devToolsExtension,
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
    );
  }
  return createStore(rootReducer, initialState, enhancer);
}
