import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaxContainerComponent } from './max-container/max-container.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRouter} from './app.router';
import {MaxHeaderModule} from './max-header/max-header.module';
import {MatGridListModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

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
