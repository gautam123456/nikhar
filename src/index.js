import 'styles/hairoil.scss';
// TODO
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Base from './components/base/Base';
import App from './components/Main';
import ErrorPage from './components/ErrorPage';


render(
  <Router history = { browserHistory } onEnter = { Base.routerInvoked() }>
    <Route path = { '/' } component = { App } />
    <Route path = { '*' } component = { ErrorPage } />
  </Router>
, document.getElementById('app'));



