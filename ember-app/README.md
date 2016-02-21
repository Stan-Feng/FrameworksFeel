# Ember-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Routes

* Routes is a finite state machine.
* Routes manages transitions
  * Load templates and models
  * Handle user events

## Services

* Singletons
* Very long life cycle
* Means of managing shared app functionality/state
* Live in the app/services
* Ember.inject.service()

## Actions

* The primary means of handling user interaction
* action-binding is similar to data-binding
* Can be handled by Routes, Components, Views and Controllers
```HTML
<span{{action 'thingsWasClicked'}}> Click Here! </span>
```
```js
Ember.Route.extend({
  actions: {
    thingsWasClicked () {
      console.log('Clicked!');
    }
  }
});
```
18 lou 3hao
10dong

### Test

* Unit - for testing algorithmic complexity
  * utils, models, services
* Integration - for testing contracts between pieces of code, and how things work together
  * components
* Acceptance (functional) - testing user workflows in the context of your entire application
  * routes, ember-data stuff

### Ember-Data

* A persistence library
* Key objects: Store, Model, Adapter, Serializer
* Define how to interact with your APIs no longer need to explicitly interact with them explicitly

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

