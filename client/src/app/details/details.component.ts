import { Component, OnInit,Directive } from '@angular/core';
import {Video} from "./video";
import {DetailsService} from "../details.service";
import {ActivatedRoute, Params, Router} from "@angular/router";



@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent implements OnInit {

  video: Video;
  constructor(private router: Router, private route: ActivatedRoute,public detailsService:DetailsService ) {

    console.log('in constructor of detCOmp'+this.router.url);
    this.getMovieById();
  }

  ngOnInit() {

  }

  getMovieById() {
    console.log('DetailComponent: before getMovieID');
    this.route.params.subscribe(
      params => {
        this.detailsService.getMovieById(params['id'])
          .subscribe(
            video => this.video = video,
            error => console.log(error)
          );
      });

    console.log(this.video);
  }

}
