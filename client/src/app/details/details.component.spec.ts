//  tslint:disable:no-unused-variable 

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {MockRouter} from "../testing/MockRouter";
import { DetailsComponent } from './details.component';
import {DetailsService} from '../details.service';
import {RatingComponent} from './rating.component';
import { Component } from '@angular/core';  
import { MockComponent } from 'ng2-mock-component';
import {UserCommentsComponent} from '../usercomments/usercomments.component';
import {ActivatedRouteStub} from '../testing/ActivatedRouteStub';


@Component({selector: 'user-comments', template: ''})
  class UserCommentsStubComponent {}
@Component({selector: 'rating', template: ''})
  class RatingStubComponent {}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent,UserCommentsStubComponent,RatingStubComponent      
       ],
                     
      providers: [
                { provide: Router, useClass: MockRouter},
               { provide: DetailsService, useClass: MockDetailsService} ,  
                {provide: ActivatedRoute, useClass: ActivatedRouteStub}                          
            ]
    })
     
  //  .compileComponents();
     fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRouteStub)

  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });



class MockDetailsService{
  getMovieById(string) {}
}


});
