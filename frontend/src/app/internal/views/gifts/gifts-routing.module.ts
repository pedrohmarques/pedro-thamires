import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from './containers/gifts/gifts.component';



const routes: Routes = [
  {
    path: '',
    component: GiftsComponent,
    data: {
      breadcrumb: null
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftsRoutingModule { }
