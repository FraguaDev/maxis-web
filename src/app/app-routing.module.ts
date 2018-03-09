import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes = [
  {
    path: 'max-portada',
    loadChildren: './pages/max-portada/max-portada.module#MaxPortadaModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
