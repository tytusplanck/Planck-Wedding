import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router }   from '@angular/router';

import { MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/home/home.component'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    AppRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule {

  constructor(router: Router) {
   }
}
