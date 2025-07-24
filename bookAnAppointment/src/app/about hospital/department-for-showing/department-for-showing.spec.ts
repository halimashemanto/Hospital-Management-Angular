import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentForShowing } from './department-for-showing';

describe('DepartmentForShowing', () => {
  let component: DepartmentForShowing;
  let fixture: ComponentFixture<DepartmentForShowing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentForShowing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentForShowing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
