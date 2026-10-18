import { Service, computed, inject, resource } from '@angular/core';

import { catchError, firstValueFrom, from, of, shareReplay, tap } from 'rxjs';

import { AuthService as ApiAuthService, UserInfo } from '../back-end/auth.service';

interface AuthState {
  checked: boolean;
  userInfo: UserInfo | null;
}

@Service()
export class AuthService {
  private serverAuth = inject(ApiAuthService);

  private authState = resource({
    loader: async () => {
      const response = await firstValueFrom(this.serverAuth.me$Response());
      return response.ok
        ? ({ checked: true, userInfo: response.body } as AuthState)
        : ({ checked: true, userInfo: null } as AuthState);
    },
  }).value;

  authenticatedUser = computed(() => this.authState()?.userInfo);

  async login(username: string, password: string): Promise<boolean> {
    await this.logout();

    try {
      const userInfo = await firstValueFrom(
        this.serverAuth.login({
          body: {
            username: username,
            password: password,
          },
        }),
      );
      this.setAuthenticated(userInfo);
      return true;
    } catch {
      this.setAuthenticated(null);
      return false;
    }
  }

  setAuthenticated(user: UserInfo | null) {
    this.authState.set({ checked: true, userInfo: user });
  }

  async checkSession(): Promise<UserInfo | null> {
    if (this.authState()?.checked) {
      return this.authState()?.userInfo ?? null;
    }

    const check$ = from(this.serverAuth.me()).pipe(
      tap((userInfo) => {
        this.authState.set({
          checked: true,
          userInfo: userInfo ?? null,
        });
      }),
      catchError(() => {
        this.setAuthenticated(null);
        return of(null);
      }),
      shareReplay(1),
    );

    return await firstValueFrom(check$);
  }

  async logout() {
    await this.serverAuth.logout();
    this.authState.set({
      checked: false,
      userInfo: null,
    });
  }
}
