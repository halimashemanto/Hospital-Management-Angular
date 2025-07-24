import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManufacture } from './update-manufacture';

describe('UpdateManufacture', () => {
  let component: UpdateManufacture;
  let fixture: ComponentFixture<UpdateManufacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateManufacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateManufacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
