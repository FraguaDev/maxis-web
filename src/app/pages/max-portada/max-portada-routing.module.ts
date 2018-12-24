import {Routes, RouterModule} from '@angular/router';
import {MaxPortadaComponent} from './max-portada.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: MaxPortadaComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaxPortadaRoutingModule { }
