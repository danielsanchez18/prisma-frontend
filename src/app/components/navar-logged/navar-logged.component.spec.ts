import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarLoggedComponent } from './navar-logged.component';

describe('NavarLoggedComponent', () => {
  let component: NavarLoggedComponent;
  let fixture: ComponentFixture<NavarLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavarLoggedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavarLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
