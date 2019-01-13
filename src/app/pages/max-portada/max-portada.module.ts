import {NgModule} from '@angular/core';
import {MaxPortadaComponent} from './max-portada.component';
import {MaxPortadaRoutingModule} from './max-portada-routing.module';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {MaxTileModule} from '../../components/max-tile/max-tile.module';
import {MaxHeaderModule} from '../../components/max-header/max-header.module';
import {MaxRoundPhotoModule} from '../../components/max-round-photo/max-round-photo.module';


@NgModule({
    imports: [
        CommonModule,
        MaxPortadaRoutingModule,
        MatCardModule,
        MatGridListModule,
        MaxTileModule,
        MaxHeaderModule,
        MaxRoundPhotoModule
    ],
    exports: [
        MaxPortadaComponent
    ],
    declarations: [
        MaxPortadaComponent
    ]
})

export class MaxPortadaModule {
}
