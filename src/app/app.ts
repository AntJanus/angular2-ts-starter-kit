/// <reference path="../typings/angular2/angular2.d.ts" />
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';
import { MyService } from './services/sampleService';
import { SubComponent } from './components/subcomponent/subcomponent';

@Component({
  selector: 'my-app',
  bindings: [MyService]
})
@View({
  template: `
    <ul>
      <li>{{ appStatus }}</li>
      <li>{{ serviceStatus }}</li>
      <sub-component></sub-component>
    </ul>
  `,
  directives: [SubComponent]
})
class MyAppComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}

bootstrap(MyAppComponent);
