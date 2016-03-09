'use strict';
import qs from 'qs';
import xhr from 'xhr';
import React from 'react';
import app from 'ampersand-app';
import Router from "ampersand-router";

import Layout from './layout.js';
import Index from './pages/index.js';
import Login from './pages/login.js';
import Repos from './pages/repos.js';
import MessagePage from './pages/message.js';
import RepoDetail from './pages/repo-detail.js';

import config from './config.js';

console.log(config);

function requiresAuth(routeHandler) {
  return function () {
    if(app.me.token) {
      this[routeHandler].apply(this, arguments);
    }
    else {
      this.redirectTo('/');
    }
  };
}

export default Router.extend({

  renderPage (page, opts = {layout : true}) {
    if(opts.layout){
      page = <Layout me = {app.me}> {page} </Layout>;
    }

    React.render(page, document.body);
  },

  routes: {
    '': 'indexHandler',
    'repos': 'reposHandler',
    'repo/:owner/:name': requiresAuth('repoDetailHandler'),
    'logout': 'logoutHandler',
    'login': 'loginHandler',
    'auth/callback?:query': 'authCallbackHandler',
    '*fourOhFour': 'fourOhFour'
  },

  indexHandler () {
    this.renderPage(<Index />, {layout : false});
  },

  reposHandler () {
    this.renderPage(<Repos repos ={app.me.repos}/>);
  },

  repoDetailHandler (owner, name) {
    const model = app.me.repos.getByFullName(owner + '/' + name);
    this.renderPage(<RepoDetail repo = {model} labels = {model.labels}/>);
  },

  loginHandler () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      'client_id': config.clientId,
      'redirect_uri': window.location.origin + '/auth/callback',
      'scope': 'user,repo'
    });
  },

  logoutHandler () {
    window.localStorage.clear();
    window.location = '/';
  },

  authCallbackHandler (query) {
    query = qs.parse(query);
    console.log(query);
    console.log('Auth Callback Handler');
    xhr({
      url:  window.location.origin + '/' + query.code,
      json: true
    }, (err, req, body) => {
      if(err){
       throw err;
      }
      console.log(body);
      app.me.token = body.token;
      this.redirectTo('/repos');
    });

    this.renderPage(<MessagePage title = 'Fetching Data' />);
  },

  fourOhFour () {
    this.renderPage(<MessagePage title = 'NOT FOUND' body = 'Sorry, nothing here.' />);
  }
});