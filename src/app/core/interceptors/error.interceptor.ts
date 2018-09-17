import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req)
      .pipe(catchError((err: HttpErrorResponse) => {
        switch(err.status) {
          case 401:
          this.toastr.error(err.error.description, 'Warning!');
          break;
          case 400:
          this.toastr.error(err.error.description, 'Warning!');
          break;
          case 409:
          this.toastr.error(err.error.description, 'Warning!');
          break;
        }

        return throwError(err);
      }))
  }

}