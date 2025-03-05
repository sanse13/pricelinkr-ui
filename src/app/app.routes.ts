import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/landing/landing.component').then(
        (m) => m.LandingComponent,
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
];
