import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

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
