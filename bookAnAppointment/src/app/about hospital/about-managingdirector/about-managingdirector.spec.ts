import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutManagingdirector } from './about-managingdirector';

describe('AboutManagingdirector', () => {
  let component: AboutManagingdirector;
  let fixture: ComponentFixture<AboutManagingdirector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutManagingdirector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutManagingdirector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
