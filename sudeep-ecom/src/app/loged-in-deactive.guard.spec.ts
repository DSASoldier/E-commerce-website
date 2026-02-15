import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { logedInDeactiveGuard } from './loged-in-deactive.guard';

describe('logedInDeactiveGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logedInDeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
