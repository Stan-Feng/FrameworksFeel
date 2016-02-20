import Ember from 'ember';
import isInArray from 'ember-app/utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favorites: Ember.inject.service(),
  isFavorited: isInArray('org', 'favorites.items'),
  classNames: ['github-org'],
  actions: {
    // Only internally related to THIS component
    favoriteClicked () {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
