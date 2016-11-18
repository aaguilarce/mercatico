import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { User, IUser } from '../models/base';
import 'rxjs/Rx'

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    saveToken(token: string) {
        localStorage.setItem('authorization-token', token);
    }

    getToken() {
        return localStorage.getItem('authorization-token') as string;
    }

    isLoggedIn() {
        let token = this.getToken();
        let payload: string;

        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
}
