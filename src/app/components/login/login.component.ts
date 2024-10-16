import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { AuthServiceService } from '../../service/auth-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthServiceService) {}

  onLogin(): void {
    const success = this.authService.login(this.nome, this.senha);
    if (!success) {
      this.errorMessage = 'Nome de usuário ou senha inválidos.';
    }
  }
}
