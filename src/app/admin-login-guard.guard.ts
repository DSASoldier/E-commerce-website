import { CanActivateFn } from '@angular/router';

export const adminLoginGuardGuard: CanActivateFn = (route, state) => {

  const bool : boolean = JSON.parse(localStorage.getItem("admin-login") || "false")

  console.log()
  return bool===false;
};
