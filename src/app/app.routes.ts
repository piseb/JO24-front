import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';
import { OffersComponent } from './pages/offers/offers.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginGuard } from './core/guards/login.gard';
import { AuthGuard } from './core/guards/auth.gard';
import { LogoutComponent } from './features/logout/logout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];
