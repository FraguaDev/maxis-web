import {NgModule} from '@angular/core';
import {MaxPortadaComponent} from './max-portada.component';
import {MaxPortadaRouter} from './max-portada.router';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [MaxPortadaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MaxPortadaRouter,
    MatGridListModule
  ],
  exports: [
    MaxPortadaComponent
  ]
})

export class MaxPortadaModule {
}
