import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleSlotComponent } from './add-schedule-slot-component';

describe('AddScheduleSlotComponent', () => {
  let component: AddScheduleSlotComponent;
  let fixture: ComponentFixture<AddScheduleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddScheduleSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScheduleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
