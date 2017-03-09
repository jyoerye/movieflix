/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsercommentsService } from './usercomments.service';

describe('UsercommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercommentsService]
    });
  });

  it('should ...', inject([UsercommentsService], (service: UsercommentsService) => {
    expect(service).toBeTruthy();
  }));
});
