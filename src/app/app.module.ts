import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaxContainerComponent } from './components/max-container/max-container.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRouter} from './app.router';
import {MaxHeaderModule} from './components/max-header/max-header.module';
import {MatGridListModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MaxTileComponent } from './components/max-tile/max-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouter,
    MaxHeaderModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
