import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDTO } from '../model/register';
import { UserDto } from '../model/User';
import { BehaviorSubject, Observable, map } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = 'https://localhost:7141/api/Account/';
  private currentUser = new BehaviorSubject<UserDto | null>(null);

  constructor(private http: HttpClient) {
    this.currentUser.next(JSON.parse(localStorage.getItem('user')!))
  }

  registerUser(RegisterDTO: FormData) {
    return this.http.post<UserDto>(`${this.url}Register`, RegisterDTO).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(user)
        return user;
      })
    );
  }

  login(loginDTO: any) {
    return this.http.post<UserDto>(`${this.url}login`, loginDTO).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(user)
        return user;
      })
    );
  }

  // Logout - clear token from storage
  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return this.currentUser.asObservable();
  }
}
