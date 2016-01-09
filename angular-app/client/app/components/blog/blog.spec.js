import {blog} from './blog.js';
import template from './blog.html';
import {blogDirective} from './blog.directive';
import {BlogController} from './blog.controller';

describe('Blog', () => {
    let $rootScope;
    let makeController;

    beforeEach(window.module(blog.name));
    beforeEach(inject((_$rootScope_) => {
      $rootScope = _$rootScope_;
      makeController = (injectables) => {
        return new BlogController(injectables);
      };
    }));

    describe('module', () => {
      it('It should have an appropriate name. \n', () => {
        expect(blog.name).to.equal('blog');
      });
    });

    describe('directive', ()=> {
      // TODO: test the directive to make sure it has the
      // right DDO and template and controller
    });

    describe('controller', ()=> {
      // TODO: test the controller
    });

    describe('template', ()=> {
      // TODO: test the template? yup
      // get creative
    });
});