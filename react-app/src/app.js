'use strict';
import app from 'ampersand-app';
import 'octicons/octicons/octicons.css';

import './styles/main.styl';
import Me from './model/me.js';
import Router from './router.js';

app.extend({
  //Main entry point of entire application
  init () {
    this.me = new Me();
    this.me.fetchInitialData();
    this.router = new Router();
    this.router.history.start();
  }
});

app.init();

window.app = app;