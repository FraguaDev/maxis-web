import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes = [
  {
    path: 'app',
    loadChildren: './max-portada/max-portada.module#MaxPortadaModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
