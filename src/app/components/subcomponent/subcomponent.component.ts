import { Component } from '@angular/core';

import { MyService } from '../../services/sampleService';

@Component({
  selector: 'sub-component',
  template: `
    <li>Subcomponent works.</li>
  `
})
export class SubComponent {
  constructor() {
  }
}

