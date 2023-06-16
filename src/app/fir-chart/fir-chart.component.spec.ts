import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirChartComponent } from './fir-chart.component';

describe('FirChartComponent', () => {
  let component: FirChartComponent;
  let fixture: ComponentFixture<FirChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
