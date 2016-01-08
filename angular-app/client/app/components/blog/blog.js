import angular from 'angular';
import {blogDirective} from './blog.directive';

export const blog = angular.module('blog', [])
.config(function ($stateProvider) {
  $stateProvider.state('blog', {
    url: '/blog',
    template: `<blog></blog>`
  });
})
.directive('blog', blogDirective);