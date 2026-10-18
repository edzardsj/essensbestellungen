import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiButton } from '@taiga-ui/core';

import { AuthService } from '@workspace/core';

import { CardNavItem } from '../card-nav-item/card-nav-item';

@Component({
  imports: [TuiButton, CardNavItem, RouterLink],
  selector: 'app-view-overview',
  styleUrl: './view-overview.scss',
  templateUrl: './view-overview.html',
})
export class ViewOverview {
  authService = inject(AuthService);
}
