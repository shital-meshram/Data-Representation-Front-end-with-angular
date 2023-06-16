import { TestBed } from '@angular/core/testing';

import { FirSearchByDateService } from './fir-search-by-date.service';

describe('FirSearchByDateService', () => {
  let service: FirSearchByDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirSearchByDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
