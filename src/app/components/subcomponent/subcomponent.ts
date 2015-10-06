import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'sub-component'
})
@View({
  template: '<p>Subcomponent works.</p>'
})
export class SubComponent {
  constructor() {

  }
}

