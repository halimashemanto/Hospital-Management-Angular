import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentName } from './department-name';

describe('DepartmentName', () => {
  let component: DepartmentName;
  let fixture: ComponentFixture<DepartmentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
