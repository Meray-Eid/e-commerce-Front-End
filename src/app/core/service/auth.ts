import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

  forgotPassword(email: string): Observable<any> {
    return of({
      status: true,
      message: 'Reset link sent successfully'
    }).pipe(
      delay(1500)
    );
  }

  loginDummy(): void {
    localStorage.setItem('token', 'mock_user_token_123');
    this.isLoggedIn.set(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
  }
}
