import './tpl.styl';
import {TplController as controller} from './tpl.controller';
import template from './tpl.html';

export const tplDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  };
};
