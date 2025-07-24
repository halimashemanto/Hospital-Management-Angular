import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTest } from './update-test';

describe('UpdateTest', () => {
  let component: UpdateTest;
  let fixture: ComponentFixture<UpdateTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
