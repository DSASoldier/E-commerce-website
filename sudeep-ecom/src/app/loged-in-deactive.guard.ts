import { CanDeactivateFn } from '@angular/router';
import { canLogInUserGoBack } from './canLonInUsergoBack';

export const logedInDeactiveGuard: CanDeactivateFn<canLogInUserGoBack> = (component, currentRoute, currentState, nextState) => {

  console.log(component);
  
  return component.poissible()
};
