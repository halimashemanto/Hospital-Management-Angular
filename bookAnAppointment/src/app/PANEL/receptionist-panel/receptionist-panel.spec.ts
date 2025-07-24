import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistPanel } from './receptionist-panel';

describe('ReceptionistPanel', () => {
  let component: ReceptionistPanel;
  let fixture: ComponentFixture<ReceptionistPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptionistPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionistPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
