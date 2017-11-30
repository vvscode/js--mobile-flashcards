import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './utils/configureStore';
import App from './components/App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
