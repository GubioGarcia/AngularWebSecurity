import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAutenticado: boolean = this.getAuthStatus();
  isAdmin: boolean = this.getAdminStatus();

  constructor(private router: Router) {
  }

  login(nome: string, senha: string) {
    if (nome && senha) {
      if (nome === 'admin' && senha === 'admin') {
        this.setAuthState(true, true)
        this.router.navigate(['/admin']);
        return true;
      } else if (nome === 'gerente' && senha === 'gerente') {
        this.setAuthState(true, false)
        this.router.navigate(['/gerente']);
        return true;
      } else if (nome == 'usuario' && senha === 'usuario') {
        this.setAuthState(true, false)
        this.router.navigate(['/profile']);
        return true;
      }
    }
    return false;
  }

  logout(): void {
    localStorage.clear();
    this.setAuthState(false, false)
    this.router.navigate(['/']);
  }

  private setAuthState(authStatus: boolean, adminStatus: boolean): void {
    this.isAutenticado = authStatus;
    this.isAdmin = adminStatus;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('adminStatus', JSON.stringify(adminStatus));
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

  private getAdminStatus(): boolean {
    return JSON.parse(localStorage.getItem('adminStatus') || 'false');
  }
}
