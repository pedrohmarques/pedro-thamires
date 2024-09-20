import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos = ['1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg', '1.jpeg']
  constructor() { }

  ngOnInit() {
  }

  getUrl(photo: string) {
    return `../../../../../../assets/images/${photo}`
  }

}
