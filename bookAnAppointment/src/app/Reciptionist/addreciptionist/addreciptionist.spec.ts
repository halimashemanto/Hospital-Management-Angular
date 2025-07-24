import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addreciptionist } from './addreciptionist';

describe('Addreciptionist', () => {
  let component: Addreciptionist;
  let fixture: ComponentFixture<Addreciptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addreciptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addreciptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
