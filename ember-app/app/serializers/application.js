import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payLoad, id, requestType) {
    var dynamicKey;

    if (requestType === 'query') {
      dynamicKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);

      payLoad = payLoad.map(item => {
        item.oldId = item.id;
        item.id = item.login || item.name;
        return item;
      });
    } else if (requestType === 'queryRecord') {
      dynamicKey = Ember.Inflector.inflector.singularize(primaryModelClass.modelName);

      payLoad.oldId = payLoad.id;
      payLoad.id = payLoad.login || payLoad.name;
    }

    return this._super(store, primaryModelClass, { [`${dynamicKey}`]: payLoad }, id, requestType);
  }
});
