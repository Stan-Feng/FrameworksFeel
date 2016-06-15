import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: require('./user.template.html'),
  styles: [`
    button {
      background-color: red;
      border: none;
      outline: none;
      padding: 10px;
      color: white;
      min-width: 80px;
      height: 50px
    }

    button:disabled {
      background-color: pink;
      cursor: not-allowed;
    }
  `]
})
export class User {
  username = '';
  isDisabled = false;

  handleClick () {
    this.isDisabled = !this.isDisabled;
  }
}
