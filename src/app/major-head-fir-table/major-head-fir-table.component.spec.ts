import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorHeadFirTableComponent } from './major-head-fir-table.component';

describe('MajorHeadFirTableComponent', () => {
  let component: MajorHeadFirTableComponent;
  let fixture: ComponentFixture<MajorHeadFirTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorHeadFirTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorHeadFirTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
