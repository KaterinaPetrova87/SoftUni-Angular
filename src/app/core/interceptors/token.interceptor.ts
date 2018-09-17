import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';

const appKey = "kid_HJFVgqNIX";
const appSecret = "47b0c1c6e90b4e2b8d9ae74d12a8b576";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('login') || req.url.endsWith(appKey)) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          'Content-Type': 'application/json'
        }
      })
    } else {
      req = req.clone({
        setHeaders: {
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
        }
      })
    }

    return next.handle(req)
      .pipe(tap((res: any) => {
        // console.log(res)
        if (res instanceof HttpResponse && res.url.endsWith('login')) {
          // console.log(res.body)
          this.saveUserData(res.body);
          this.toastr.success('Login successful', 'Success!');
          this.router.navigate(['/products/all']);
        }

        if (res instanceof HttpResponse && res.url.endsWith(appKey)) {
              this.toastr.success('Register successful', 'Success!');
              this.router.navigate(['/auth/signin']);
        }

        if (res instanceof HttpResponse && res.url.endsWith('_logout')) {
          localStorage.clear();
          this.toastr.success('Logout successful', 'Success');
          this.router.navigate(['/home']);
        }
      }))
  }
  private saveUserData(data) {
    let roleId = '';
    if (JSON.stringify(data._kmd.roles)) {
      roleId = JSON.stringify(data._kmd.roles[0].roleId);
    } else {
      roleId = null
    }
    this.authService.authtoken = data._kmd.authtoken;
    this.authService.username = data.username;
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    localStorage.setItem('userId', data._id);
    localStorage.setItem('roleId', roleId);
  }

}
