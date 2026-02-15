import { CanActivateFn } from '@angular/router';

export const logInRestrictGuard: CanActivateFn = (route, state) => {
  return true;
};
