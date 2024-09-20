import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/containers/home/home.component';
import { AboutComponent } from './views/about/containers/about/about.component';
import { GiftsComponent } from './views/gifts/containers/gifts/gifts.component';
import { PhotosComponent } from './views/photos/containers/photos/photos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'about',
        component: AboutComponent,
        loadChildren: () => import('./views/about/about.module').then(mod => mod.AboutModule),
      },
      {
        path: 'gift',
        component: GiftsComponent,
        loadChildren: () => import('./views/gifts/gifts.module').then(mod => mod.GiftsModule),
      },
      {
        path: 'photo',
        component: PhotosComponent,
        loadChildren: () => import('./views/photos/photos.module').then(mod => mod.PhotosModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
