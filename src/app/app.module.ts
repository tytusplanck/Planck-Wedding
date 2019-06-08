import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatTabsModule, MatGridListModule, MatCardModule, MatListModule, MatIconRegistry, MatToolbarModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { OurStoryComponent } from './our-story/our-story.component';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { OurWeddingComponent } from './our-wedding/our-wedding.component';
import { MenuListComponent } from './shared/menu-list/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    RegistryComponent,
    OurWeddingComponent,
    OurStoryComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
  }
}
