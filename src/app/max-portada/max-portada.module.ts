import {NgModule} from '@angular/core';
import {MaxPortadaComponent} from './max-portada.component';
import {MaxPortadaRouter} from './max-portada.router';
import {MatCardModule} from '@angular/material';


@NgModule({
  declarations: [MaxPortadaComponent],
  imports: [
    MatCardModule,
    MaxPortadaRouter
  ],
  exports: [
    MaxPortadaComponent
  ]
})

export class MaxPortadaModule {
}
