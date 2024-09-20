import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './containers/photos/photos.component';


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    data: {
      breadcrumb: null
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
