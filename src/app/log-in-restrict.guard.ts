import { CanActivateFn } from '@angular/router';

export const logInRestrictGuard: CanActivateFn = (route, state) => {

  const user = JSON.parse(localStorage.getItem('logUser') || '{}');

  console.log(user);

  return !(user.email);
};
