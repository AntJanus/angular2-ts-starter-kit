import { Component } from '@angular/core';
import { MyService } from './services/sample.service';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li>{{ appStatus }}</li>
      <li>{{ serviceStatus }}</li>
      <sub-component></sub-component>
    </ul>
  `,
})
export class AppComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}
