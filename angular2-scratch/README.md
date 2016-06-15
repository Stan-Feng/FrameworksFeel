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

## Component Fundamentals
* Class
  * Class is not Inheritance
  * Create the component as an ES6 class
  * Properties and methods on our component class will be available for binding out template
* Import
  * Import core Angular dependencies
  * Import 3rd party dependencies
  * Import your custom dependencies
  * This approach gives us a more fine-grained control over the managing our dependencies
* Decorate
  * Turn our class into something Angular2 can use by decorating it with a Angular specific metadata
  * Use the @<decorator> syntax to decorate your classes
  * The most common class decorators are @Component, @Injecteable, @Directive and @Pipe
  * You can also decorate properties and methods within your class
  * The two most common member decorators are @Input and @Output
* Enhance
  * This is an iterative process that will vary on a per-case basis but the idea is to start small and build your component out
  * Enhance with composition by adding methods, inputs and outputs, injecting services, etc.
  * Remember to keep your components small and focused
* Lifecycle Hooks
  * Allow us to perform custom logic at various stage of component's Lifecycle
  * Data isn't always immediately available in the constructor
  * Only available in TypeScript
  * The lifecycle interfaces are optional.
  * Implemented as class methods on the component class

## Templates
  * Interpolation
    * Allow us to bind to component properties/methods in out template
  * Property Binding
    * Flows data from the component to an element
  * Event Binding
    * Flows data from an element to the component
  * Hashing Operator
    * Creates local variable in template
  * Elvis Operator
