import { Service } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface UserInfo {
  id: string;
  roles: string[];
  username: string;
}

export interface Credentials {
  password: string;
  username: string;
}

export interface Login$Params {
  body: Credentials;
}

export interface Me$Response {
  body: UserInfo;
  ok: boolean;
}

@Service()
export class AuthService {
  private mockUser: UserInfo = {
    id: 'test_user',
    roles: ['ADMIN', 'USER'],
    username: 'Test User',
  };

  login(_params: Login$Params): Observable<UserInfo> {
    return of(this.mockUser);
  }

  logout(): Observable<void> {
    return of(void 0);
  }

  me(): Observable<UserInfo> {
    return of(this.mockUser);
  }

  me$Response(): Observable<Me$Response> {
    return of({ body: this.mockUser, ok: true });
  }
}
