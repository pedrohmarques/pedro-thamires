import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/containers/home/home.component';
import { AboutComponent } from './views/about/containers/about/about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' },
        loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'AboutPage' },
        loadChildren: () => import('./views/about/about.module').then(mod => mod.AboutModule),
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
