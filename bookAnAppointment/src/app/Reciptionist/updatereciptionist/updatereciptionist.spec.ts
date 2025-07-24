import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatereciptionist } from './updatereciptionist';

describe('Updatereciptionist', () => {
  let component: Updatereciptionist;
  let fixture: ComponentFixture<Updatereciptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatereciptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatereciptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
