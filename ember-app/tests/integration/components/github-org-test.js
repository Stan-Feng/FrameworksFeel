import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), 'Favorite', 'Inline Syntax & Basic Rendering');

  // Template block usage:" + EOL +
  // this.render(hbs`
  //   {{#github-org}}
  //     template block text
  //   {{/github-org}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});

test('it fills data', function(assert) {
  assert.expect(2);

  const org = Ember.Object.create({
    id: 'my-org'
  });

  this.set('org', org);
  this.render(hbs`{{github-org org=org favoriteClicked=favoriteClicked}}`);

  this.on('favoriteClicked', function () {
    console.log('Favorited Clicked Trigger.');
  });
  Ember.$('.github-org span').click();

  assert.equal(Ember.$('.github-org a').text(), 'my-org', 'id should be displayed properly');
  assert.equal(Ember.$('.github-org span').text(), `
[ Favorite ]
`);
});
