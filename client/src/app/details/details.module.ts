import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {DetailsComponent} from "./details.component";
import {RatingComponent} from "./rating.component";
import {UserCommentsComponent} from "../usercomments/usercomments.component";

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [DetailsComponent,RatingComponent,UserCommentsComponent],
  exports:[DetailsComponent,RatingComponent,UserCommentsComponent]
})
export class DetailsModule { }
