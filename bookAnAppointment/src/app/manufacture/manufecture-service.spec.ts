import { TestBed } from '@angular/core/testing';

import { ManufectureService } from './manufecture-service';

describe('ManufectureService', () => {
  let service: ManufectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManufectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
