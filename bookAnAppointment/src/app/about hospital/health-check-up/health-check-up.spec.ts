import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckUp } from './health-check-up';

describe('HealthCheckUp', () => {
  let component: HealthCheckUp;
  let fixture: ComponentFixture<HealthCheckUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCheckUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCheckUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
