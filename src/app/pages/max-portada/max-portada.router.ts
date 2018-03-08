import {Routes, RouterModule} from '@angular/router';
import {MaxPortadaComponent} from './max-portada.component';


const MAX_PORTADA_ROUTER: Routes = [
  {
    path: 'max-portada',
    component: MaxPortadaComponent
  }
];

export const MaxPortadaRouter = RouterModule.forChild(MAX_PORTADA_ROUTER);
