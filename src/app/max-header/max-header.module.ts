import {NgModule} from '@angular/core';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {MaxHeaderComponent} from './max-header.component';
import {MaxPortadaModule} from '../max-portada/max-portada.module';

@NgModule({
  declarations: [
    MaxHeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MaxPortadaModule
  ],
  exports: [
    MaxHeaderComponent,
    MatTabsModule,
    MaxPortadaModule
  ],
  providers: []
})
export class MaxHeaderModule {

}
