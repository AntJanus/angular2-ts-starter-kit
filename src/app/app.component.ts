import { Component, View } from 'angular2/core';
import { MyService } from './services/sampleService';
import { SubComponent } from './components/subcomponent/subcomponent.component';

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
export class MyAppComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}
