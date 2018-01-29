import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaxHeaderComponent} from './max-header/max-header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatTabsModule} from '@angular/material';
import { MaxPortadaComponent } from './max-portada/max-portada.component';
import { MaxDeveloperComponent } from './max-developer/max-developer.component';
import { MaxTypewriterComponent } from './max-typewriter/max-typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxHeaderComponent,
    MaxPortadaComponent,
    MaxDeveloperComponent,
    MaxTypewriterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
