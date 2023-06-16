import { TestBed } from '@angular/core/testing';

import { FirdetailsService } from './firdetails.service';

describe('FirdetailsService', () => {
  let service: FirdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
