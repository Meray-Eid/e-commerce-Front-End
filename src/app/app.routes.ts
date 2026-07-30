import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth-layout').then(m => m.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register)
      },
      {
        path: 'forget-password',
        loadComponent: () => import('./pages/forget-password/forget-password').then(m => m.ForgetPassword)
      },
      { path: 'forgot-password', redirectTo: 'forget-password', pathMatch: 'full' }
    ]
  },

  {
    path: '',
    loadComponent: () => import('./layouts/user-layout/user-layout').then(m => m.UserLayout),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
      }
    ]
  },

  { path: '**', redirectTo: 'home' }
];
