import './app.styl';
import template from './app.html';

export const appDirectice = () => {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
