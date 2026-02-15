import { CanDeactivateFn } from '@angular/router';

export const logInSignUpRestrictGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
