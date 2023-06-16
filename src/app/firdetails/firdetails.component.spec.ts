import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirdetailsComponent } from './firdetails.component';

describe('FirdetailsComponent', () => {
  let component: FirdetailsComponent;
  let fixture: ComponentFixture<FirdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
