import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQualificationsComponent } from './dashboard-qualifications.component';

describe('DashboardQualificationsComponent', () => {
  let component: DashboardQualificationsComponent;
  let fixture: ComponentFixture<DashboardQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardQualificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
