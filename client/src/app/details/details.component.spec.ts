//  tslint:disable:no-unused-variable 

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement,Input } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {MockRouter} from "../testing/MockRouter";
import { DetailsComponent } from './details.component';
import {DetailsService} from '../details.service';
import {RatingComponent} from './rating.component';
import { Component,NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  
import { MockComponent } from 'ng2-mock-component';
import {UserCommentsComponent} from '../usercomments/usercomments.component';
import {ActivatedRouteStub} from '../testing/ActivatedRouteStub';
import {Video} from './video';
import {Observable}     from 'rxjs/Observable';

@Component({selector: 'user-comments', template: ''})
  class UserCommentsStubComponent {}
@Component({selector: 'rating', template: ''})
  class RatingStubComponent {
     @Input() private movieId:string;
     @Input() private userName:string;
  }

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRoute: ActivatedRoute;
  let service: DetailsService;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent,UserCommentsStubComponent,RatingStubComponent      
       ],
         schemas: [ CUSTOM_ELEMENTS_SCHEMA ],          
      providers: [
                { provide: Router, useClass: MockRouter},
               { provide: DetailsService, useClass: MockDetailsService} ,  
                {provide: ActivatedRoute, useClass: ActivatedRouteStub}                          
            ]
    })
     
  //  .compileComponents();
     fixture = TestBed.createComponent(DetailsComponent);
     component = fixture.componentInstance;
     activatedRoute = TestBed.get(ActivatedRoute);
     service = TestBed.get(DetailsService);

  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

it('should get details for a video',  () => {
    spyOn(service, 'getMovieById').and.callFake(() => {
        return Observable.of(testOneVideo);
      });
    activatedRoute.testParams = { id : 1 };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.getMovieById).toHaveBeenCalledWith(1);
  });


class MockDetailsService{
  getMovieById(string) {}
}


const testOneVideo : Video =
  {
    "id"   : 1,
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "rated": "PG-13",
    "released": "2015-05-01",
    "runtime": "141 min",
    "genre": "Action, Adventure, Sci-Fi",
    "director": "Joss Whedon",
    "writer": "Joss Whedon, Stan Lee (Marvel comics), Jack Kirby (Marvel comics)",
    "actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.",
    "language": "English",
    "country": "USA",
    "awards": "1 win & 12 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTU4MDU3NDQ5Ml5BMl5BanBnXkFtZTgwOTU5MDUxNTE@._V1_SX300.jpg",
    "metaScore": 66,
    "imdbRating": 7.6,
    "imdbVotes": 370909,
    "imdbId": "tt2395427",
    "type": "movie"
  }

});
