import Collection from 'ampersand-rest-collection';

import Repo from './repo.js';
import githubMixin from '../helpers/github-mixin.js';


export default Collection.extend(githubMixin, {
  model: Repo,
  url: 'https://api.github.com/user/repos',
  getByFullName (fullName) {
    let model = this.findWhere({'full_name': fullName});

    if(!model) {
      model = new Repo({'full_name' : fullName});
    }
    model.fetch();

    return model;
  }
});