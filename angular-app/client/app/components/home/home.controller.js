import _ from 'lodash';

class HomeController {
  constructor () {
    this.title = 'This is the title!';
    this.items = _.times(5, i=> {
      return `I am iten ${i}.`;
    });
  }
}

export {HomeController};