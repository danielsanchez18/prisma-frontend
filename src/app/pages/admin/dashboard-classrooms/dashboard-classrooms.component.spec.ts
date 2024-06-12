import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassroomsComponent } from './dashboard-classrooms.component';

describe('DashboardClassroomsComponent', () => {
  let component: DashboardClassroomsComponent;
  let fixture: ComponentFixture<DashboardClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardClassroomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
