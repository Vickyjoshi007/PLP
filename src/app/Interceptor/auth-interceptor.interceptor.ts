import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private service: AccountService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let currentUser;
     this.service.isLoggedIn().subscribe((res) => {
      if(res)
      {
        currentUser=res;
        request=request.clone({
          setHeaders:{
            'Authorization':`Bearer ${res.token}`
          }
        })
      }
    });

    return next.handle(request);
  }
}
