import { CanActivateFn } from '@angular/router';

export const admAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
