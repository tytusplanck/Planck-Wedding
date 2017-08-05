import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import{ RouterOutlet } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { RegistryComponent } from './registry/registry.component'

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
