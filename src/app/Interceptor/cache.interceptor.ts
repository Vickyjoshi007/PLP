import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CacheService } from '../Services/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private service:CacheService) {}


  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method !== 'Get') {
      return next.handle(request);
    }

    const cacheResponse=this.service.getCache(request.url)

    if(cacheResponse)
    {
      return new Observable(o=>{
        o.next(new HttpResponse({
          body:cacheResponse
        }))
        o.complete();
      })
    }

    return next.handle(request).pipe(tap(event=>{
      if(event instanceof HttpResponse)
      {
        this.service.setCache(request.url,event.body)
      }
    }));
  }
}
