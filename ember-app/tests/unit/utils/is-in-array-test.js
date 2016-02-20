import isInArray from '../../../utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {
  const Type = Ember.Object.extend({
    item: 6,
    list: [1, 2, 3],
    isItemList: isInArray('item', 'list')
  });

  const obj = Type.create();
  assert.equal(obj.get('isItemList'), false, 'Initial Check for not in list.');

  obj.get('list').addObject(6);
  assert.equal(obj.get('isItemList'), true, 'Insert expected element into list.');

  // let result = isInArray();
});
