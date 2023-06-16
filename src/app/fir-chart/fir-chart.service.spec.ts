import { TestBed } from '@angular/core/testing';

import { FirChartService } from './fir-chart.service';

describe('FirChartService', () => {
  let service: FirChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
