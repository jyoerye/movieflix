import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserCommentsService} from "../usercomments.service";
import {UserComments} from "./UserComments";

@Component({
  selector: 'user-comments',
  templateUrl: './usercomments.component.html',
  styleUrls: ['./usercomments.component.css']
})
export class UserCommentsComponent implements OnInit {
  private comments: string;
  private flag: boolean = false;
  userComments: UserComments[];

  constructor(private route: ActivatedRoute,private userCommentsService: UserCommentsService) {
  }

  ngOnInit() {
    console.log("INIT JYOTHSSNAIn show COmments");
    this.showComments();
  }


  toggleCommentsView() {
    if (this.flag) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }

  }

  onSubmit() {
    console.log(this.comments);
    this.route.params.subscribe(
      params => {
        this.userCommentsService.saveUserComments(params['id'],"jacky",this.comments).subscribe(error=>console.log(error))
      });
  }

  showComments()
  {
    console.log("JYOTHSSNAIn show COmments");
    this.route.params.subscribe(
      params => {
        this.userCommentsService.getCommentsByVideoId(params['id']).subscribe(userCommentsResponse => this.userComments = userCommentsResponse,
          error=>console.log(error))
      });
      console.log('CheckCOmments here'+this.userComments);
  }

  handleResults(userComments:UserComments[])
  {
    this.userComments = userComments;
    console.log(this.userComments);
  }

}
