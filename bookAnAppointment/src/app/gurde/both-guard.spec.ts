import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bothGuard } from './both-guard';

describe('bothGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bothGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
