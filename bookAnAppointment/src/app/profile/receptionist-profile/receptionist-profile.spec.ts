import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistProfile } from './receptionist-profile';

describe('ReceptionistProfile', () => {
  let component: ReceptionistProfile;
  let fixture: ComponentFixture<ReceptionistProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptionistProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionistProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
