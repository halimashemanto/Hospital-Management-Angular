import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoctorWithoutEditDelete } from './find-doctor-without-edit-delete';

describe('FindDoctorWithoutEditDelete', () => {
  let component: FindDoctorWithoutEditDelete;
  let fixture: ComponentFixture<FindDoctorWithoutEditDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindDoctorWithoutEditDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDoctorWithoutEditDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
