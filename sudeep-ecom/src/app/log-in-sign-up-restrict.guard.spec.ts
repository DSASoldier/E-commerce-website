import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { logInSignUpRestrictGuard } from './log-in-sign-up-restrict.guard';

describe('logInSignUpRestrictGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logInSignUpRestrictGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
