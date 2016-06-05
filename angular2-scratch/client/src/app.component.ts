import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  template: require('./app.template.html'),
  directives: [ ROUTER_DIRECTIVES ]
})
export class App {};
