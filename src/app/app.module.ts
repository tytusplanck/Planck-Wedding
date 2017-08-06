import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router }   from '@angular/router';

import { MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdTabsModule, MdTabNav, MdGridListModule, MdCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { OurStoryComponent } from './our-story/our-story.component';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { OurWeddingComponent } from './our-wedding/our-wedding.component';


@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    PhotosComponent,
    RegistryComponent,
    OurWeddingComponent,
    OurStoryComponent
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
    MdGridListModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule {

  constructor(router: Router) {
   }
}
