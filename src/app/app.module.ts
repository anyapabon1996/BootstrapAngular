import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HechizosComponent } from './hechizos/hechizos.component';
import { AnimalesComponent } from './animales/animales.component';
import { HumanoidesComponent } from './humanoides/humanoides.component';

@NgModule({
  declarations: [
    AppComponent,
    HechizosComponent,
    AnimalesComponent,
    HumanoidesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
