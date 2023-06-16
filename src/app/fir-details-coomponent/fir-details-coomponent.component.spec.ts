import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirDetailsCoomponentComponent } from './fir-details-coomponent.component';

describe('FirDetailsCoomponentComponent', () => {
  let component: FirDetailsCoomponentComponent;
  let fixture: ComponentFixture<FirDetailsCoomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirDetailsCoomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirDetailsCoomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
