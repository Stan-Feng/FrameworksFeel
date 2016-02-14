import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  getFavoriteItems () {
    return this.get('items');
  }
});
