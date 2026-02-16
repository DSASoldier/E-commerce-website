import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const user = localStorage.getItem("admin-log")
  return (user==="true");
};
