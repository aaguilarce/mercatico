import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() {
    console.log('Shop View...');
  }

  ngOnInit() {
    console.log('Hello shop');
  }
}
