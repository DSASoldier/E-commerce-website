import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const adminGuard: CanActivateFn = (route, state) => {
  
  const user = localStorage.getItem("admin-log")

  const route2 = inject(Router);

  if(user!=="true"){
    route2.navigate(['/page-not-found']);  
  }

  return (user==="true");
};
