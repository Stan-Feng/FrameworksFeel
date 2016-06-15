import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { User } from './users/user.component';

@Component({
  selector: 'app',
  template: require('./app.template.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES, User ]
})
export class App {};
