import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatDialog } from '@angular/material/dialog';
import { ModalGiftComponent } from './modal/modal-gift/modal-gift.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {
  pixKey = "00020126420014BR.GOV.BCB.PIX0120pdhmarques@gmail.com5204000053039865802BR5901N6001C62070503***6304FF08"
  info = "A escolha do presente recomendado não é obrigatória; você pode optar por um presente de sua preferência."
  showLoading = true;
  products: any

  constructor(public clipboard: Clipboard, public dialog: MatDialog, private snackBar: MatSnackBar, private readonly http: HttpService) { }

  ngOnInit() {
    this.getProducts()
  }

  handleCopy() {
    this.clipboard.copy(this.pixKey)
    this.snackBar.open('Código copiado com sucesso.', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }

  openModal(product: any) {
    const dialogRef = this.dialog.open(ModalGiftComponent, {
      width: '400px',
      data: {
        product
      }
    })

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.snackBar.open('Agradecemos muito pelo presente.', '', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          this.getProducts();
        }
      }
    })
  }

  getProducts() {
    this.http.httpGet('gift').subscribe({
      next: (response)=> {
        if(response) {
          this.products = response;
        }
        this.showLoading = false;
      },
      error: () => {
        this.showLoading = false;
      }      
    })
  }
}
