import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChairman } from './about-chairman';

describe('AboutChairman', () => {
  let component: AboutChairman;
  let fixture: ComponentFixture<AboutChairman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutChairman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutChairman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
