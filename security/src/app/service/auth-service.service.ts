import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAutenticado: boolean = this.getAuthStatus();
  isAdmin: boolean = this.getAdminStatus();
  isGerente: boolean = this.getGerenteStatus();

  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        this.setAuthState(true, true, true)
        this.router.navigate(['/dashboard']);
        return true;
      } else if (username === 'gerente' && password === 'gerente') {
        this.setAuthState(true, false, true)
        this.router.navigate(['/gerente']);
        return true;
      } else if (username === 'user' && password === 'user') {
        this.setAuthState(true, false, false)
        this.router.navigate(['/profile']);
        return true;
      }
    }
    return false;
  }

  logout(): void {
    localStorage.clear();
    this.setAuthState(false, false, false);
    this.router.navigate(['/']);
  }

  private setAuthState(authStatus: boolean, adminStatus: boolean, gerenteStatus: boolean): void {
    this.isAutenticado = authStatus;
    this.isAdmin = adminStatus;
    this.isGerente = gerenteStatus;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('adminStatus', JSON.stringify(adminStatus));
    localStorage.setItem('gerenteStatus', JSON.stringify(gerenteStatus));
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

  private getAdminStatus(): boolean {
    return JSON.parse(localStorage.getItem('adminStatus') || 'false');
  }

  private getGerenteStatus(): boolean {
    return JSON.parse(localStorage.getItem('gerenteStatus') || 'false');
  }
}
