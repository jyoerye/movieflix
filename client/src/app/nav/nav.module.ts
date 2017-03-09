import { NgModule } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {NavComponent} from "./nav.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [BrowserModule,RouterModule],
  declarations: [NavComponent],
  exports:[NavComponent]
})
export class NavModule { }
