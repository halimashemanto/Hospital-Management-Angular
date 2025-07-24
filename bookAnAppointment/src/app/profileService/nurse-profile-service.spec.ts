import { TestBed } from '@angular/core/testing';

import { NurseProfileService } from './nurse-profile-service';

describe('NurseProfileService', () => {
  let service: NurseProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
