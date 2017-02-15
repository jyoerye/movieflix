/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailsServiceService } from './details-service.service';

describe('DetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsServiceService]
    });
  });

  it('should ...', inject([DetailsServiceService], (service: DetailsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
