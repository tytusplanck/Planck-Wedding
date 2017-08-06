import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router }   from '@angular/router';

import { MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdTabsModule, MdTabNav, MdGridListModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/home/home.component'
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { OurWeddingComponent } from './our-wedding/our-wedding.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    RegistryComponent,
    OurWeddingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    AppRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTabsModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule {

  constructor(router: Router) {
   }
}
