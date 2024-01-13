import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  private cache: Map<
    string,
    {
      expireDate: number;
      data: HttpResponse<any>;
    }
  > = new Map();

  getCache(url: string) {
    const cacheEntry = this.cache.get(url);
    if (cacheEntry && Date.now() - cacheEntry?.expireDate < 10000) {
      return cacheEntry.data;
    } else {
      return null;
    }
  }

  setCache(url:string,data:any)
  {
    this.cache.set(url,{
      data:data,expireDate:Date.now()
    })
  }
}
