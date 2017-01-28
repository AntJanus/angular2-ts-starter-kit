import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubComponent } from './components/subcomponent/subcomponent.component';
import { MyService } from './services/sample.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    SubComponent
  ],
  providers: [ MyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
