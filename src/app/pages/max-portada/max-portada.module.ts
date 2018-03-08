import {NgModule} from '@angular/core';
import {MaxPortadaComponent} from './max-portada.component';
import {MaxPortadaRouter} from './max-portada.router';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {MaxTileComponent} from '../../components/max-tile/max-tile.component';
import {MaxTypewriterComponent} from '../../components/max-typewriter/max-typewriter.component';


@NgModule({
  declarations: [
    MaxPortadaComponent,
    MaxTileComponent,
    MaxTypewriterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MaxPortadaRouter,
    MatGridListModule
  ],
  exports: [
    MaxPortadaComponent,
    MaxTileComponent,
    MaxTypewriterComponent
  ]
})

export class MaxPortadaModule {
}
