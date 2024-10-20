import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AdmComponent} from "./components/adm/adm.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {authGuard} from "./guard/auth.guard";
import {adminGuard} from "./guard/admin.guard";
import { GerenteComponent } from './components/gerente/gerente.component';
import { gerenteAuthGuard } from './guard/gerente-auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'admin', component: AdmComponent, canActivate: [adminGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'gerente', component: GerenteComponent, canActivate: [gerenteAuthGuard]}
];
