import { Component } from '@angular/core';

import { MyService } from '../../services/sample.service';

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

