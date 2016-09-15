import { Component } from '@angular/core';
import { MyService } from './services/sampleService';
import { SubComponent } from './components/subcomponent/subcomponent.component';

@Component({
  selector: 'my-app',
  bindings: [MyService],
  template: `
    <ul>
      <li>{{ appStatus }}</li>
      <li>{{ serviceStatus }}</li>
      <sub-component></sub-component>
    </ul>
  `,
  directives: [SubComponent]
})
export class AppComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}
