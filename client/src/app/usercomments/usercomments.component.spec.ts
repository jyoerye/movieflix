/* tslint:disable:no-unused-variable */
import {Component, OnInit} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { UserCommentsComponent } from './usercomments.component';
import { UserCommentsService } from '../usercomments.service';
import {MockRouter} from '../testing/MockRouter';
import {
    FormGroup,
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import {ActivatedRouteStub} from '../testing/ActivatedRouteStub';

describe('UsercommentsComponent', () => {
  let component: UserCommentsComponent;
  let fixture: ComponentFixture<UserCommentsComponent>;
  let service: UserCommentsService;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [UserCommentsComponent],
       imports: [ReactiveFormsModule,FormsModule],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: UserCommentsService, useClass: MockUserCommentsService },
         {provide: ActivatedRoute, useClass: ActivatedRouteStub}
       // { provide: ActivatedRoute, useClass: ActivatedRouteStub }

      ]
    })
    fixture = TestBed.createComponent(UserCommentsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UserCommentsService);
    activatedRoute = TestBed.get(ActivatedRoute);

      //.compileComponents();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all videos',  () => {
    spyOn(service, 'getCommentsByVideoId').and.callFake(() => {
        return Observable.of(testAllComments);
      });
    activatedRoute.testParams = { id : 12 };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.getCommentsByVideoId).toHaveBeenCalledWith(12);
  });
 


  class MockUserCommentsService {
    getCommentsByVideoId(string)
    { }
  }

const testAllComments : any[]= [
  {
    "id": "Uc1",
    "userComments": "The movie is terrible",
    "video": "v1",
    "user": "u1",
    
  },
  {
    "id": "Uc2",
    "userComments": "The movie was fun",
    "video": "v1",
    "user": "u1",
    
  }
  
]

});

