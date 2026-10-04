import { Component, input } from '@angular/core';

import { TuiIcon } from '@taiga-ui/core';

@Component({
  imports: [TuiIcon],
  selector: 'app-card-nav-item',
  styleUrl: './card-nav-item.scss',
  templateUrl: './card-nav-item.html',
})
export class CardNavItem {
  iconName = input.required<string>();
}
