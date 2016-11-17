import { Component } from '@angular/core';

@Component({
    selector: 'shop-topbar',
    styleUrls: ['topbar.component.scss'],
    templateUrl: 'topbar.component.html'
})
export class TopbarComponent {

    constructor() {
      console.log('Topbar Component...');
    }
}
