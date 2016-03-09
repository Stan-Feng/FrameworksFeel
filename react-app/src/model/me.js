'use strict';
import Model from 'ampersand-model';

import RepoCollection from './repo-collection.js';
import githubMixin from '../helpers/github-mixin.js';

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  initialize () {
    //Two scenario to cover -- Got token from localStorage/Github
    this.token = window.localStorage.token;

    this.on('change:token', this.onTokenChange);
  },

  //Keep up with server
  props: {
    id: 'number',
    login: 'string',
    'avatar_url': 'string'
  },

  //Keep up with browser
  session: {
    //We don't want to persist token to server as a part of user profile
    token: 'string'
  },

  collections: {
    repos: RepoCollection
  },

  onTokenChange () {
    window.localStorage.token = this.token;
    this.fetchInitialData();
  },

  fetchInitialData () {
    if(this.token) {
      this.fetch();
      this.repos.fetch();
    }
  }
});