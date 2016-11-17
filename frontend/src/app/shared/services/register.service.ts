import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { User, IUser } from '../models/base';
import 'rxjs/Rx'

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  register(user: IUser) {
    let body = new URLSearchParams();
    body.append('email', user.email);
    body.append('password', user.password);

    return this.http.post('http://localhost:3000/api/Users', body).map(res => res.json());
  }
}
