import {Component, Input, ChangeDetectorRef} from  '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {RatingService} from "../rating.service";
import {error} from "util";

@Component({
  selector: 'rating',
  template: `
    <span style="color: gold">   
      <template ngFor [ngForOf]="range" let-index="index">
        <i class="fa" (click)="update(index + 1)" [ngClass]="index < rate ? 'fa-star' : 'fa-star-o'"></i>
      </template>
    </span>
  `

})
export class RatingComponent {
  private range:Array<number> = [1,2,3,4,5];
  private rate:number;
  private updateRate:number;
  @Input() private movieId:string;
  @Input() private userName:string;


  constructor(private cdref:ChangeDetectorRef,private ratingService: RatingService,private route: ActivatedRoute) {
    console.log('RatingComponent: Console log in the constructor');
  }

  ngOnInit() {

    this.getRatingByUserName();
  }
  getRatingByUserName()
  {
    console.log('RatingComponent: getRatingByUserName');
    this.route.params.subscribe(
      params => {
        this.ratingService.getRatingByUserName(this.movieId,this.userName).subscribe(rate =>
          {this.rate = rate;
          this.cdref.detectChanges();
          },
          error=>console.log(error))
      });

  }

  update(value) {
    this.rate = value;
    this.updateRate =value;
    console.log('RatingComponent: before stars');
    this.route.params.subscribe(
      params => {
        this.ratingService.saveUserRating(params['id'],this.updateRate).subscribe(error=>console.log(error))
      });

    console.log('RatingComponent: after stars');

  }
}
