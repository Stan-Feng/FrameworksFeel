import './app.styl';
import {appDirectice} from './app.directive';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';


import {home} from './components/home/home.js';
import {blog} from './components/blog/blog.js';

angular.module('app', [
   uiRouter,
   ngAnimate,
   home.name,
   blog.name
])
.directive('app', appDirectice);