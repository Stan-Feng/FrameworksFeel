import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  const repo = Ember.Object.create({
    forks_count: 32,
    watchers_count: 99,
    name: 'repo_name'
  });
  // Template block usage:" + EOL +
  this.set('repo', repo);
  this.render(hbs`
    {{github-repo repo=repo}}
  `);

  assert.equal(this.$().text().trim(), `repo_name

(
Forks: 32
Watchers: 99
)`);
});
