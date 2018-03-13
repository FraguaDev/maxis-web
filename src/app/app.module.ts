import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRouter} from './app-routing.module';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {MaxPortadaModule} from './pages/max-portada/max-portada.module';
import {MaxTileModule} from './components/max-tile/max-tile.module';
import {MaxContainerComponent} from './components/max-container/max-container.component';
import {MaxHeaderModule} from './components/max-header/max-header.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouter,
    MatCardModule,
    MatGridListModule,
    MaxPortadaModule,
    MaxTileModule,
    MaxHeaderModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    MaxContainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
