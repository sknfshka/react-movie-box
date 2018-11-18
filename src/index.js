import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';
import Catalog from './components/catalog/Catalog';
import Film from './components/film/FilmView';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

function loggedIn() { return store.getState().login.loggedIn; }

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}

function authAlreadyPerformed(nextState, replace) {
  if (loggedIn()) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/login" component={Login} onEnter={authAlreadyPerformed} />
      <Route exact path="/" component={Catalog} onEnter={requireAuth} />
      <Route path="/film/:id" component={Film} onEnter={requireAuth} />
      <Route exact path="/profile" component={Profile} onEnter={requireAuth} />
      <Route path="/profile/:id" component={Profile} onEnter={requireAuth} />
    </Router>
  </Provider>,
  document.getElementById('root')
);