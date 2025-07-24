import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPanel } from './doctor-panel';

describe('DoctorPanel', () => {
  let component: DoctorPanel;
  let fixture: ComponentFixture<DoctorPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
