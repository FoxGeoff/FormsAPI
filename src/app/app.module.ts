import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationTemplateComponent } from './registration-template/registration-template.component';
import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationTemplateComponent,
    RegistrationReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
