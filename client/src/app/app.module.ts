import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavModule} from "./nav/nav.module";

import {AppRoutingModule} from "./app-routing.module";
import {VideosModule} from "./videos/videos.module";
import {DetailsModule} from "./details/details.module";
import {LoginModule} from "./login/login.module";
import {RegistrationModule} from "./registration/registration.module";
import {VideosService} from "./videos.service";
import {DetailsService} from "./details.service";
import {RatingService} from "./rating.service";
import {UserCommentsService} from "./usercomments.service";
import {LoginService} from "./login.service";




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavModule,
    VideosModule,
    DetailsModule,
    LoginModule,
    RegistrationModule,
    AppRoutingModule
  ],
  providers: [VideosService,DetailsService,RatingService,UserCommentsService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
console.log("HELLO")
