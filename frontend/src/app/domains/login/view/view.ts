import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoginForm } from '../form/form';

@Component({
  selector: 'app-login-view',
  imports: [LoginForm],
  templateUrl: './view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './view.scss',
})
export class View {}
