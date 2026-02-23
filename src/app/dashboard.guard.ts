import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const dashboardGuard: CanActivateFn = (route, state) => {
  
  const data = (localStorage.getItem("logUser"));

  const route2 = inject(Router);

  console.log(route,state);

  if(data===null){
    route2.navigate(['/']);
  }
  if(JSON.parse(data || '').email==='sudeep@gmail.com'){
    route2.navigate(['/admin-dashboard']);
  }

  return data !== null;
};
