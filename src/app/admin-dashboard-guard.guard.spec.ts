import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminDashboardGuardGuard } from './admin-dashboard-guard.guard';

describe('adminDashboardGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminDashboardGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
