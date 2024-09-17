import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-box',
  templateUrl: './generic-box.component.html',
  styleUrls: ['./generic-box.component.scss']
})
export class GenericBoxComponent implements OnInit {

  @Input() title = '';
  @Input() widthStyle = '';

  constructor() { }

  ngOnInit() {
  }

}
