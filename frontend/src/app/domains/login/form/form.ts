import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TuiButton, TuiIcon, TuiInput, TuiNotification } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';

// import { AuthService } from '@workspace/core';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, TuiInput, TuiPassword, TuiIcon, TuiButton, TuiNotification],
  templateUrl: './form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './form.scss',
})
export class LoginForm {
  // private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });
  errorMessage = signal<string | null>(null);

  clearErrorMessage() {
    this.errorMessage.set(null);
  }

  async onSubmit() {
    if (!this.loginForm.valid) {
      this.errorMessage.set('Invalid values.');
      return;
    }
    await this.router.navigate(['/overview']);
    // const { username, password } = this.loginForm.getRawValue();
    // try {
    //   if (await this.authService.login(username, password)) {
    //     this.errorMessage.set(null);
    //     await this.router.navigate(['/map']);
    //   } else {
    //     this.errorMessage.set('Invalid username or password.');
    //   }
    // } catch (error) {
    //   this.errorMessage.set('An error occurred during login.');
    //   console.error(error);
    // }
  }
}
