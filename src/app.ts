/// <reference path="typings/angular2/angular2.d.ts" />
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div>If you see this, your application is working.</div>'
})

class MyAppComponent {
  constructor() {

  }
}

bootstrap(MyAppComponent);
