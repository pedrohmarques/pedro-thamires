import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalLoadingComponent } from 'src/app/shared/components/modal-loading/modal-loading.component';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-modal-gift',
  templateUrl: './modal-gift.component.html',
  styleUrls: ['./modal-gift.component.scss']
})
export class ModalGiftComponent implements OnInit {

  constructor(private readonly httpService: HttpService, public dialogRef: MatDialogRef<ModalGiftComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  formGifter = new FormGroup({
    gifter_name: new FormControl('', Validators.required)
  })

  ngOnInit() {
    console.log(this.data.product)
  }

  onSubmit() {
    const loading = this.dialog.open(ModalLoadingComponent, {
      width: '400px',
      disableClose: true,
      data: {
        message: "Estamos salvando os dados. Aguarde um momento."
      }
    });
    this.httpService.httpPut(`gift/update/${this.data.product._id}`, { id: this.data.product._id, gifter_name: this.formGifter.get('gifter_name')?.value }).subscribe({
      next: () => {
        loading?.close()
        this.dialogRef.close(true)    
      },
      error: () => {
        loading?.close();
        this.dialogRef.close(false)
      }
    })
  }

  handleClose() {
    this.dialogRef.close()
  }


}
