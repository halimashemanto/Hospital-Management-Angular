import { TestBed } from '@angular/core/testing';

import { ReciptionistService } from './reciptionist-service';

describe('ReciptionistService', () => {
  let service: ReciptionistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptionistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
