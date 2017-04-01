/* tslint:disable:no-unused-variable */
/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

import {
    TestBed
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { VideosComponent } from './videos.component';
import {Router} from "@angular/router";
import {VideosService} from "../videos.service";
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";

// ADDED CLASS
class MockRouter {
    url: string='/videos';
   
}

describe('VideosComponent', () => {
  let component: VideosComponent;
  let router: Router;

beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VideosComponent],
            imports: [ReactiveFormsModule],
             providers: [
                { provide: Router, useClass: MockRouter},
                 {provide: Http, useFactory: (backend, options) => {return new Http(backend, options);},
          deps: [MockBackend, BaseRequestOptions]},      
        MockBackend,
        BaseRequestOptions,
                VideosService
            ]
        });

        const fixture = TestBed.createComponent(VideosComponent);
        component = fixture.componentInstance;
    });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });




});


