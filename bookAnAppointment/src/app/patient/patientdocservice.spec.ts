import { TestBed } from '@angular/core/testing';

import { Patientdocservice } from './patientdocservice';

describe('Patientdocservice', () => {
  let service: Patientdocservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Patientdocservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
