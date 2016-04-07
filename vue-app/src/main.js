import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './route-config.js';
// require('es6-promise').polyfill();

// install router
Vue.use(VueRouter);

// create router
const Router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

// conigure router
configRouter(Router);

// bootstrap app
const App = Vue.extend(require('./App.vue'));
Router.start(App, '#app');
