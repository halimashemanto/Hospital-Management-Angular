import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewreciptionist } from './viewreciptionist';

describe('Viewreciptionist', () => {
  let component: Viewreciptionist;
  let fixture: ComponentFixture<Viewreciptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewreciptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewreciptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
