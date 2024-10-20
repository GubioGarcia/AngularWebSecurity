import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from "../service/auth-service.service";
import { inject } from "@angular/core";

export const gerenteAuthGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isAutenticado) {
    if (authService.isGerente || authService.isAdmin) {
      return true;
    } else {
      alert("Você não tem permissão");
      router.navigate(['/dashboard']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
