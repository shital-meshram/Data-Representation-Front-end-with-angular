import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirSearchByDateComponent } from './fir-search-by-date.component';

describe('FirSearchByDateComponent', () => {
  let component: FirSearchByDateComponent;
  let fixture: ComponentFixture<FirSearchByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirSearchByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirSearchByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
