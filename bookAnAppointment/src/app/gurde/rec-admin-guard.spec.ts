import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { recAdminGuard } from './rec-admin-guard';

describe('recAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => recAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
