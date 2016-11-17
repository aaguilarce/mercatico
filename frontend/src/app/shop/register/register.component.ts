import { Component, Input } from '@angular/core';
import { RegisterService } from './../../shared/services/register.service';
import { IUser } from './../../shared/models/base';
import { User } from './../../shared/models/base';
import 'rxjs/Rx'

@Component({
  selector: 'shop-register',
  styleUrls: ['register.component.scss'],
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  @Input() user: IUser;

  constructor(private _registerService: RegisterService) {
    console.log('Register Component...');
    this.user = new User('', '', '');
  }

  register() {
    console.log(this.user);

    this._registerService.register(this.user).subscribe(r => {
      console.log(r);
    });
  }
}
