import { tplDirective } from './tpl.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const tpl = angular.module('tpl', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('tpl', {
      url: '/tpl',
      template: '<tpl></tpl>'
    });
  })
  .directive('tpl', tplDirective);
