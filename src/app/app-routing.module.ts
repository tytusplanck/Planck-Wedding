import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { RouterOutlet } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { OurWeddingComponent } from './our-wedding/our-wedding.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/ourstory', pathMatch: 'full' },
  {
    path: 'ourstory',
    component: OurStoryComponent
  },
  {
    path: 'weddingdetails',
    component: OurWeddingComponent
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
