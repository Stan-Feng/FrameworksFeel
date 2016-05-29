interface Application {
  name: string;
}

class App implements Application {
  constructor (public name: string) {
    
  }
}

var app = new App('hello');
