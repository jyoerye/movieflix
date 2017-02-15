import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RegistrationComponent} from "./registration.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [RegistrationComponent],
  exports:[RegistrationComponent]
})
export class RegistrationModule { }
