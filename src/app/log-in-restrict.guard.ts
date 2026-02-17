import { CanActivateFn, Router, RouterEvent } from '@angular/router';
import { inject } from '@angular/core';
export const logInRestrictGuard: CanActivateFn = (route, state) => {

  const user = JSON.parse(localStorage.getItem('logUser') || '{}');
  
  const route2 = inject(Router)

  console.log(user);

  if((user.email)){
      route2.navigate(['/page-not-found']);
  }


  return !(user.email);
};
