import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './containers/photos/photos.component';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
