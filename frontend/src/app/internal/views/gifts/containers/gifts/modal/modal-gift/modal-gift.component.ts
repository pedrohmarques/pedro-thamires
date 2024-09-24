import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalLoadingComponent } from 'src/app/shared/components/modal-loading/modal-loading.component';


@Component({
  selector: 'app-modal-gift',
  templateUrl: './modal-gift.component.html',
  styleUrls: ['./modal-gift.component.scss']
})
export class ModalGiftComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalGiftComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  formGifter = new FormGroup({
    quantity: new FormControl(1),
    gifter_name: new FormControl('', Validators.required)
  })

  ngOnInit() {
    console.log(this.data.product)
  }

  onSubmit() {
    console.log(this.formGifter)
    const loading = this.dialog.open(ModalLoadingComponent, {
      width: '400px',
      disableClose: true,
      data: {
        message: "Estamos salvando os dados. Aguarde um momento."
      }
    });
  }

  handleClose() {
    this.dialogRef.close()
  }


}
