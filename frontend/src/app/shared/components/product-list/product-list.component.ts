import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any;
  @Output() toGift: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getUrl(photo: string) {
    return `../../../../../../assets/images/${photo}`
  }

  handleToGift(product: any) {
    this.toGift.emit(product)
  }
}
