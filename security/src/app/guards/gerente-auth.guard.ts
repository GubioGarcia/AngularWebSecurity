import { CanActivateFn } from '@angular/router';

export const gerenteAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
