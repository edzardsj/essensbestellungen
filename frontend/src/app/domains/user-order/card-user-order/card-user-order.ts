import { Component, input } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  imports: [TuiIcon, TuiButton],
  selector: 'app-card-user-order',
  styleUrl: './card-user-order.scss',
  templateUrl: './card-user-order.html',
})
export class CardUserOrder {
  isFinished = input.required<boolean>();
}
