import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './07_Redux-middleware/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './07_Redux-middleware/modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
