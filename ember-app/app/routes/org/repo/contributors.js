import Ember from 'ember';

export default Ember.Route.extend({

  model (params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');

    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors`)
    .then(rawContributors => {

      return rawContributors.map(contributor => {
        contributor.oldId = contributor.id;
        contributor.id = contributor.name;

        return contributor;
      });
    });
  }
});
