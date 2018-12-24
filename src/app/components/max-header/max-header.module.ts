import {NgModule} from '@angular/core';
import {MatButtonModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {MaxHeaderComponent} from './max-header.component';

@NgModule({
  declarations: [
    MaxHeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    MaxHeaderComponent,
    MatTabsModule
  ],
  providers: []
})
export class MaxHeaderModule {

}
