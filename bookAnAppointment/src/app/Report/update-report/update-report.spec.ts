import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReport } from './update-report';

describe('UpdateReport', () => {
  let component: UpdateReport;
  let fixture: ComponentFixture<UpdateReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
