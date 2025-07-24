import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareOfBangladesh } from './health-care-of-bangladesh';

describe('HealthCareOfBangladesh', () => {
  let component: HealthCareOfBangladesh;
  let fixture: ComponentFixture<HealthCareOfBangladesh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCareOfBangladesh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareOfBangladesh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
