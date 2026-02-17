import { CanActivateFn } from '@angular/router';

export const adminLoginGuardGuard: CanActivateFn = (route, state) => {

  const bool : boolean = JSON.parse(localStorage.getItem("admin-log") || "false")

  console.log(bool)
  return bool===false;
};
