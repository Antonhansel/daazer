import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';
import { Provider } from 'react-redux';
import './index.css';

const StoreInstance = Store();

ReactDOM.render(
  (<Provider store={StoreInstance}>
    <App />
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
