import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static _token: string;

  get token(): string {
    return AuthenticationService._token;
  }

  set token(val: string) {
    AuthenticationService._token = val;
  }

  isUserLoggedIn = false;
  currentUser = {};

  constructor() { }
}
