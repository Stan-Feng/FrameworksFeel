// import 'normalize.css';
import './app.styl';
import {appDirectice} from './app.directive';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';


import {home} from './components/home/home.js';

angular.module('app', [
   uiRouter,
   ngAnimate,
   home.name
])
.directive('app', appDirectice);