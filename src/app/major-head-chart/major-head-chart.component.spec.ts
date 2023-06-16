import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorHeadChartComponent } from './major-head-chart.component';

describe('MajorHeadChartComponent', () => {
  let component: MajorHeadChartComponent;
  let fixture: ComponentFixture<MajorHeadChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorHeadChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorHeadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
