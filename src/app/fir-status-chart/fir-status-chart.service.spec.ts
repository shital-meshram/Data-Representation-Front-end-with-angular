import { TestBed } from '@angular/core/testing';

import { FirStatusChartService } from './fir-status-chart.service';

describe('FirStatusChartService', () => {
  let service: FirStatusChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirStatusChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
