import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTest } from './view-test';

describe('ViewTest', () => {
  let component: ViewTest;
  let fixture: ComponentFixture<ViewTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
