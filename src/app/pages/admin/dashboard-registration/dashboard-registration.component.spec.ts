import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegistrationComponent } from './dashboard-registration.component';

describe('DashboardRegistrationComponent', () => {
  let component: DashboardRegistrationComponent;
  let fixture: ComponentFixture<DashboardRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
