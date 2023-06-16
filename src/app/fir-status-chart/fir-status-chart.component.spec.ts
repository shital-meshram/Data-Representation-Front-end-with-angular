import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirStatusChartComponent } from './fir-status-chart.component';

describe('FirStatusChartComponent', () => {
  let component: FirStatusChartComponent;
  let fixture: ComponentFixture<FirStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirStatusChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
