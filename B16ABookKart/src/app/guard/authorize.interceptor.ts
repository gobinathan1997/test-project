import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


      const header =localStorage.getItem('token')

    if (header) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${header}`
        }
        
        
      });
      console.log(request);
    }
    return next.handle(request).pipe(catchError((err: any) => {
      
      if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
              console.log('Unauthorized');
              alert('Unauthorized user')
          }
      }
      return new Observable<HttpEvent<any>>();
    }));
  }
}
