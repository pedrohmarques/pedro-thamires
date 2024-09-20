import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-gift',
  templateUrl: './modal-gift.component.html',
  styleUrls: ['./modal-gift.component.scss']
})
export class ModalGiftComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalGiftComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.product)
  }

}
