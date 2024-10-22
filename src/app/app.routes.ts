import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';
import { OffersComponent } from './pages/offers/offers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: WelcomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'offers', component: OffersComponent },
  {
    path: '**',
    component: NotFoundComponent
  }
];
