import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePanel } from './nurse-panel';

describe('NursePanel', () => {
  let component: NursePanel;
  let fixture: ComponentFixture<NursePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NursePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
