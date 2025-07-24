import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHospital } from './about-hospital';

describe('AboutHospital', () => {
  let component: AboutHospital;
  let fixture: ComponentFixture<AboutHospital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHospital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHospital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
