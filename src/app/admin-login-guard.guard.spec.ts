import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminLoginGuardGuard } from './admin-login-guard.guard';

describe('adminLoginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminLoginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
