import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserSignupModel } from '../../models/auth-models/user.signup.model';
import { UserSigninModel } from '../../models/auth-models/user.signin.model';

const adminRoleId = 'e481aaf3-3155-4116-b467-62d71e71a83e';
const appKey = "kid_HJFVgqNIX";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  private currentAuthtoken: string;
  private currentUsername: string;
  private adminRoleId: string;

  signUp(user: UserSignupModel) {
    return this.http.post(registerUrl, JSON.stringify(user));
  }

  signIn(user: UserSigninModel) {
   return this.http.post(loginUrl, JSON.stringify(user));
  }

  signOut() {
    return this.http.post(logoutUrl, {});
  }

  isLoggedIn() {
    return this.currentAuthtoken === localStorage.getItem('authtoken');
    // return localStorage.getItem('authtoken') !== null;
  }

  isAdmin() {
    this.adminRoleId = JSON.parse(localStorage.getItem('roleId'));
    return this.adminRoleId === adminRoleId ? true : false
  }

  // get role() {
  //   return this.adminRoleId;
  // }

  // set role(value: string) {
  //   this.adminRoleId = value;
  // }

  get username() {
    return this.currentUsername;
  }

  set username(value: string) {
    this.currentUsername = value;
  }

    get authtoken() {
      return this.currentAuthtoken;
    }

    set authtoken(value: string) {
      this.currentAuthtoken = value;
    }

  // private createAuthHeaders(type: string) {
  //   if (type === 'Basic') {
  //     return new HttpHeaders({
  //       'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
  //       'Content-Type': 'application/json'
  //     })
  //   } else {
  //     return new HttpHeaders({
  //       'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
  //       'Content-Type': 'application/json'
  //     });
  //   }
  // }
}