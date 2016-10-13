import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import * as reducers from './reducers';

injectTapEventPlugin();

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DEBUG = true;
let logger = createLogger();

let middleware = [
  DEBUG && logger
].filter(Boolean)

let store = createStore(
  combinedReducers,
  applyMiddleware(...middleware)
);

const history = syncHistoryWithStore(browserHistory, store)

render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
