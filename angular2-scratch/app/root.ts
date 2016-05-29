interface Application {
  name: String;
}

class App implements Application {
  name: string;

  constructor (n: string) {
    this.name = n;
  }
}

var app = new App('hello');
