import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiftsRoutingModule } from './gifts-routing.module';
import { GiftsComponent } from './containers/gifts/gifts.component';
import { ModalGiftComponent } from './containers/gifts/modal/modal-gift/modal-gift.component';

@NgModule({
  declarations: [
    GiftsComponent,
    ModalGiftComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GiftsRoutingModule
  ]
})
export class GiftsModule { }
