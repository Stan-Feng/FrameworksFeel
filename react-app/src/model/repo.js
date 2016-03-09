import Model from 'ampersand-model';

import githubMixin from '../helpers/github-mixin.js';
import LabelCollection from './label-collection.js';

export default Model.extend(githubMixin, {
  url () {
    return 'https://api.github.com/repos/' + this.full_name ;
  },
  //Lookup the api see what data format will response
  props: {
    id: 'number',
    name: 'string',
    'full_name': 'string'
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn () {
        return '/repo/' + this.full_name;
      }
    }
  },

  collections: {
    labels: LabelCollection
  },

  fetch () {
    Model.prototype.fetch.call(this, arguments);
    this.labels.fetch({success: (collection, response, options) => {
        console.log(collection);
        // console.log(response);
        // console.log(options);
      }
    });
  }
});
