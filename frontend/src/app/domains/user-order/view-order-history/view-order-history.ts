import { Component } from '@angular/core';
import { PageHeader } from '@workspace/shared';
import { CardUserOrder } from '../card-user-order/card-user-order';

@Component({
  imports: [PageHeader, CardUserOrder],
  selector: 'app-view-order-history',
  styleUrl: './view-order-history.scss',
  templateUrl: './view-order-history.html',
})
export class ViewOrderHistory {}
