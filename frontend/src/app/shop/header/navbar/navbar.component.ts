import { Component } from '@angular/core';

@Component({
    selector: 'shop-navbar',
    styleUrls: ['navbar.component.scss'],
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

    constructor() {
      console.log('Navbar Component...');
    }
}
