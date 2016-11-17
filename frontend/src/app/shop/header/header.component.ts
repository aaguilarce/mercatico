import { Component } from '@angular/core';

@Component({
    selector: 'shop-header',
    styleUrls: ['header.component.css'],
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor() {
      console.log('Header Component...');
    }
}
