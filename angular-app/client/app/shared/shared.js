import angular from 'angular';

import { api } from './api';
import { posts } from './posts';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Posts', posts);
