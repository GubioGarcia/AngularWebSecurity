import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    nome: 'Usuário',
    email: 'email@example.com',
    telefone: '556298989898',
    nivelAcesso: 'Usuário'
  };
}
