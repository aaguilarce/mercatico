import { Component, Input } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { IUser } from './../../shared/models/base';
import { User } from './../../shared/models/base';
import 'rxjs/Rx'

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    @Input() user: IUser;

    constructor(private _authService: AuthService) {
        console.log('[DEBUG] -- auth.component.ts constructor');
        this.user = new User('', '', '');
    }

    login() {
        this.user.username = '';

        

            Authentication
                .login(vm.credentials)
                .error(function (err) {
                    alert(err);
                })
                .then(function () {
                    //verify type of user
                    Authentication.getProfile()
                        .success(function (data) {
                            vm.user = data;
                            //console.log(data);
                            if (vm.user.type === 'admin') {
                                $state.go('profileadmin');
                            }
                            else if (vm.user.type === 'client') {
                                $state.go('books');
                            }
                        })
                        .error(function (e) {
                            console.log(e);
                        });


                });
        };

    ngOnInit() {
        console.log('Hello shop');
    }
}
