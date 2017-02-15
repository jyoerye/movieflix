import { NgModule } from '@angular/core';

import {VideosComponent} from "./videos.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [BrowserModule,RouterModule],
  declarations: [VideosComponent],
  exports:[VideosComponent]
})
export class VideosModule { }
console.log("HELLO2")
