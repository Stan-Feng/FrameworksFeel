import Collection from 'ampersand-rest-collection';

import Label from './label.js';
import githubMixin from '../helpers/github-mixin.js';

export default Collection.extend(githubMixin, {
  url () {
    return this.parent.url() + '/labels';
  },
  model: Label,
});