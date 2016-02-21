import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');

    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid
    });
    // return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}`)
    // .then(raw => {
    //   raw.oldId = raw.id;
    //   raw.id = raw.name;
    //   return raw;
    // });
  }
});
