import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChipsComponent } from './dashboard-chips.component';

describe('DashboardChipsComponent', () => {
  let component: DashboardChipsComponent;
  let fixture: ComponentFixture<DashboardChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
