import {Component, View} from 'angular2/angular2';

import { MyService } from '../../services/sampleService';

@Component({
  selector: 'sub-component'
})
@View({
  template: `
    <li>Subcomponent works.</li>
  `
})
export class SubComponent {
  constructor() {
  }
}

