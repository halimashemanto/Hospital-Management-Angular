import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManufacture } from './view-manufacture';

describe('ViewManufacture', () => {
  let component: ViewManufacture;
  let fixture: ComponentFixture<ViewManufacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewManufacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewManufacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
