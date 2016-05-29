## Angular2 Demo Application

### Objectives
* Why Angular2?
  1. By focusing on the standards, twice power we get with half of the framework
  2. Reactive mechanism baked into the framework (Observables)

* Angular2 Building Block
  1. Directive (@metadata)
    * is a class decorated with @Directive
    * A component is just a directive with added template features
    * Built-in directives include structural directives and attribute directives
  2. Template
    * includes data bindings as well as other components and directives
    * leverages native DOM events and properties
    * leverages shadow DOM to do some really interesting things with view encapsulation
  3. Component (@metadata)
    * ES6 classes
    * Services injected in the constructor
    * Hook into component lifecycle with hooks
    * Properties and methods of the component class are available to the
  4. Service (property binding with template)
    * is just class
    * should only do one specific thing
    * Take the burden of business logic out of components
  5. Metadata
    * Decorate class, allowing Angular to process a class
  6. Data Binding
    * Enables data to flow from the component to template and vice-versa
    * Interpolation, property binding, event binding and tow-way binding
    * Syntax expanded result is a much smaller framework footprint
  7. Dependency Injection
    * Supplies instance of a class with fully-formed dependencies
    * Maintains a container of previously create service instance
    * To use DI for a service, we register it as a provider in one of two ways: when bootstrapping the application, or in the component metadata
    * Each component gets its own injector, **you can declare a service in a component level**
  8. Module
    * Core mechanism for composition
* Angular2 Architectural Best Practices
  * Include all files pertinent to a component in the same folder.
  * Remember CIDER for creating components (Create class, Import dependencies, Decorate class, Enhance with composition, Repeat for sub-components)
  * Keep templates small enough to put in the main component file directly
  * Delegate business logic from the component to a provider
  * Don't be afraid to split a component up if it si growing too large
  * Constantly consider change detection implications as you develop an app
