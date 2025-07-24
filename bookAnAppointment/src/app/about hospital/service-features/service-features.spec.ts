import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeatures } from './service-features';

describe('ServiceFeatures', () => {
  let component: ServiceFeatures;
  let fixture: ComponentFixture<ServiceFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
