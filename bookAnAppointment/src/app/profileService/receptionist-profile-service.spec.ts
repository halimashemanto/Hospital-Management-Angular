import { TestBed } from '@angular/core/testing';

import { ReceptionistProfileService } from './receptionist-profile-service';

describe('ReceptionistProfileService', () => {
  let service: ReceptionistProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionistProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
