import Ember from 'ember';

export default Ember.Route.extend({
  // SERVICES
  favorites: Ember.inject.service(),

  // MODEL
  model () {
    return [
      { id: 'emberjs' },
      { id: 'ember-cli' },
      { id: 'microsoft' },
      { id: 'yahoo' },
      { id: 'netflix' },
      { id: 'facebook' }
    ];
  },

  // EVENT HANDLERS
  actions: {
    favoriteClicked (org) {
      this.get('favorites.items').addObject(org);
      console.log(this.get('favorites').getFavoriteItems().map(x => x.id).join(' '));
    }
  }
});
