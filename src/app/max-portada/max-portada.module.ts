import {NgModule} from '@angular/core';
import {MaxPortadaComponent} from './max-portada.component';
import {MaxPortadaRouter} from './max-portada.router';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {MaxTileComponent} from '../max-tile/max-tile.component';


@NgModule({
  declarations: [
    MaxPortadaComponent,
    MaxTileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MaxPortadaRouter,
    MatGridListModule
  ],
  exports: [
    MaxPortadaComponent,
    MaxTileComponent
  ]
})

export class MaxPortadaModule {
}
