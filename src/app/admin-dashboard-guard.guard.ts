import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminDashboardGuardGuard: CanActivateFn = (route, state) => {
  const data = JSON.parse(localStorage.getItem("logUser") || '{}');
  
    const route2 = inject(Router);
  
    console.log(route,state);

    console.log(data);

    if(!data.email){


      route2.navigate(['/']);
    }
    if(data.email.trim()!=='sudeep@gmail.com'){
      route2.navigate(['/page-not-found']);
    }
    
    return data.email === 'sudeep@gmail.com';
};
