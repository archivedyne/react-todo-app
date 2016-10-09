import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import reducers from './reducers';

// React 15.0.2 "Unknown props onTouchTap" warningsの対策
injectTapEventPlugin();

const DEBUG = true;

let logger = createLogger();

let middleware = [
  DEBUG && logger
].filter(Boolean)

let store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
