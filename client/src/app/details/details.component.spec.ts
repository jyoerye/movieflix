//  tslint:disable:no-unused-variable 

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Router} from "@angular/router";
import {MockRouter} from "../testing/MockRouter";
import { DetailsComponent } from './details.component';
import {DetailsService} from '../details.service';
import {RatingComponent} from './rating.component';
import { Component } from '@angular/core';  
import { MockComponent } from 'ng2-mock-component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent,
      MockComponent({ selector: 'rating' }),
      MockComponent({ selector: 'user-comments' })
       ],
                     
      providers: [
                { provide: Router, useClass: MockRouter},
               { provide: DetailsService, useClass: MockDetailsService} ,                            
            ]
    })
     
  //  .compileComponents();
     fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;


  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });



class MockDetailsService{
  getMovieById(string) {}
}


});
