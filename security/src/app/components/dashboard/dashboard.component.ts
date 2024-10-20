import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private _router: Router, private _service: AuthServiceService) {
  }

  gerente(){
    this._router.navigate(['/gerente']);
  }

  adm() {
    this._router.navigate(['/admin']);
  }

  profile(){
    this._router.navigate(['/profile']);
  }

  logout(){
    this._service.logout();
  }
}
