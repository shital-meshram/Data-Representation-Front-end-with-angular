import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFirTableComponent } from './total-fir-table.component';

describe('TotalFirTableComponent', () => {
  let component: TotalFirTableComponent;
  let fixture: ComponentFixture<TotalFirTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFirTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalFirTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
