/* tslint:disable:no-unused-variable */

import {MockBackend, MockConnection} from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { UserCommentsService } from './usercomments.service';
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";

describe('UserCommentsService', () => {
  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [
        {provide: Http, useFactory: (backend, options) => {return new Http(backend, options);},
          deps: [MockBackend, BaseRequestOptions]},
        MockBackend,
        BaseRequestOptions,
        UserCommentsService
      ]
    });
  });


  it('should create the  service', inject([UserCommentsService], (service: UserCommentsService) => {
    expect(service).toBeTruthy();
  }));

 it('should return expected value from getCommentsByVideoId', inject([UserCommentsService, MockBackend], (service: UserCommentsService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testComments});
      conn.mockRespond(new Response(options));
    });

    expect(service.getCommentsByVideoId("12").subscribe(res => expect(res).toBe(testComments)))
  }));



const testComments : any[]= [
  {
    "id": "u1",
    "userComments": "This movie is good",
    "video": "Airlift",
    "user": "jyoerye",
    
  },

   {
    "id": "u2",
    "userComments": "This movie is horrible",
    "video": "The Martian",
    "user": "jacky",
    
  }
]
});

