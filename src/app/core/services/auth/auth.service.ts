import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IToken } from '../../interfaces/token';
import { ICredentials } from '../../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = "token";
  private readonly apiUrl = environment.apiURL
  private readonly http = inject(HttpClient);
  token = signal('');

  login({ username, password }: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(this.apiUrl + "login/", { username, password })
      .pipe(
        tap((response) => {
          const token = response.token
          this.token.set(token);
          localStorage.setItem(this.tokenKey, token);
        })
      )
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem(this.tokenKey)) {
      return true
    }
    return false
  }

  logout() {
    return this.http.get(this.apiUrl + "logout/")
      .pipe(
        tap(() => { localStorage.removeItem(this.tokenKey); })
      )
  }
}
