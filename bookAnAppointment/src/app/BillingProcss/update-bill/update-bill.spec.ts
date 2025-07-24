import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBill } from './update-bill';

describe('UpdateBill', () => {
  let component: UpdateBill;
  let fixture: ComponentFixture<UpdateBill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
