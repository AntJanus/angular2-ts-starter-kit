import { Component } from '@angular/core';
import { MyService } from './services/sample.service';
import { SubComponent } from './components/subcomponent/subcomponent.component';

@Component({
  selector: 'my-app',
  providers: [MyService],
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
