import { TestBed } from '@angular/core/testing';

import { FirDetailPopupServiceService } from './fir-detail-popup-service.service';

describe('FirDetailPopupServiceService', () => {
  let service: FirDetailPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirDetailPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
