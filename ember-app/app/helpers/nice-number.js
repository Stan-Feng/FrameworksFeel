import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  if (!params) {
    return '';
  }

  var [ num ] = params;
  num = parseInt(num, 10);
  if (num > 1000) {
    return `${Math.round(num / 100) / 10}k`;
  } else {
    return `${num}`;
  }
}

export default Ember.Helper.helper(niceNumber);
