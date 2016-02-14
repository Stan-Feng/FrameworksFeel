import Ember from 'ember';

export default Ember.Route.extend({

  model (params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');

    return $.get(`https://api.github.com/orgs/${orgId}/repos`)
    .then(rawRepos => {
      return rawRepos.map(repo => {

        repo.oldId = repo.id;
        repo.id = repo.name;
        return repo;
      });
    });
  }
});
