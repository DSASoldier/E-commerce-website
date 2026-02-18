import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  
  const data = localStorage.getItem("logUser");

  return data !== null;
};
