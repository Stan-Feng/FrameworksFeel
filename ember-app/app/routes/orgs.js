import Ember from 'ember';

export default Ember.Route.extend({
  // SERVICES
  favorites: Ember.inject.service(),

  // MODEL
  model () {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.run.later(() => {
        resolve([
         { id: 'emberjs' },
         { id: 'ember-cli' },
         { id: 'microsoft' },
         { id: 'yahoo' },
         { id: 'netflix' },
         { id: 'facebook' }
        ]);
     }, 1000);
    });

  },

  // EVENT HANDLERS
  actions: {
    toggleFavorite (org) {
      if (this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites.items').addObject(org);
      } else {
        this.get('favorites.items').removeObject(org);
      }
      console.log(this.get('favorites').getFavoriteItems().map(x => x.id).join(' '));
    }
  }
});
