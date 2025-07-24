import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNurse } from './update-nurse';

describe('UpdateNurse', () => {
  let component: UpdateNurse;
  let fixture: ComponentFixture<UpdateNurse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateNurse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNurse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
