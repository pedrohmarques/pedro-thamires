import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatDialog } from '@angular/material/dialog';
import { ModalGiftComponent } from './modal/modal-gift/modal-gift.component';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {
  pixKey = "00020126420014BR.GOV.BCB.PIX0120pdhmarques@gmail.com5204000053039865802BR5901N6001C62070503***6304FF08"
  info = "A escolha do presente recomendado não é obrigatória; você pode optar por um presente de sua preferência."

  products = [{
    image: '1.jpeg',
    name: 'Kit Roupa de Cama',
    recomendation: 'https://www.lindacasa.com.br/jogo-de-lencol-percal-400-fios-ponto-palito-grafitec/p?gad_source=1&gclid=Cj0KCQjwurS3BhCGARIsADdUH52kuLCy9WV_2PxmFVtgiukF6vUqlRQMIoe6aB9rL4aHgw5os-sGV-8aApmiEALw_wcB',
    author: 'Pedro Henrique Marques Almeida'
  },{
    image: '1.jpeg',
    name: 'Kit Roupa de Cama',
    recomendation: 'https://www.lindacasa.com.br/jogo-de-lencol-percal-400-fios-ponto-palito-grafitec/p?gad_source=1&gclid=Cj0KCQjwurS3BhCGARIsADdUH52kuLCy9WV_2PxmFVtgiukF6vUqlRQMIoe6aB9rL4aHgw5os-sGV-8aApmiEALw_wcB',
    author: 'Pedro Henrique Marques Almeida'
  },{
    image: '1.jpeg',
    name: 'Kit Roupa de Cama',
    recomendation: 'https://www.lindacasa.com.br/jogo-de-lencol-percal-400-fios-ponto-palito-grafitec/p?gad_source=1&gclid=Cj0KCQjwurS3BhCGARIsADdUH52kuLCy9WV_2PxmFVtgiukF6vUqlRQMIoe6aB9rL4aHgw5os-sGV-8aApmiEALw_wcB',
    author: null
  }]

  constructor(public clipboard: Clipboard, public dialog: MatDialog) { }

  ngOnInit() {
  }

  handleCopy() {
    this.clipboard.copy(this.pixKey)
  }

  openModal(product: any) {
    const dialogRef = this.dialog.open(ModalGiftComponent, {
      width: '400px',
      data: {
        product
      }
    })
  }
}
