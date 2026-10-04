import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiStringHandler } from '@taiga-ui/cdk/types';
import { TuiButton, TuiCell, TuiDropdown, TuiFilterByInputOptions, TuiFilterByInputPipe, TuiIcon, TuiTextfield, TuiTextfieldComponent, TuiTitle } from '@taiga-ui/core';
import { TuiChevron, TuiComboBox, TuiDataListWrapper, TuiDataListWrapperComponent } from '@taiga-ui/kit';
import { PageHeader } from '@workspace/shared';

interface OrderItem { 
  name: string;
  date: string;
  icon: string;
}

@Component({
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TuiIcon,
    TuiButton,
    TuiFilterByInputPipe,
    TuiCell,
    TuiChevron,
    TuiDataListWrapperComponent,
    TuiTitle,
    TuiTextfield,
    TuiComboBox,
    TuiDropdown,
    TuiDataListWrapper,
    PageHeader
],
  selector: 'app-view-new-order',
  styleUrl: './view-new-order.scss',
  templateUrl: './view-new-order.html',
})
export class ViewNewOrder {
  orderList = signal<OrderItem[]>([
    { name: 'Dönerlounge Findorff', date: '2024-06-01', icon: '@tui.store' },
    { name: 'Order 2', date: '2024-06-02', icon: '@tui.store' },
    { name: 'Order 3', date: '2024-06-03', icon: '@tui.store' },
  ]);

  mealTypes = signal<string[]>(['Döner', 'Rollo', 'Lahamadun']);
  mealKinds = signal<string[]>(['Kalb', 'Huhn', 'Falafel', 'Feta']);
  with = signal<string[]>(['scharf', 'zwiebeln', 'Extra Fleisch', 'Feta']);
  without = signal<string[]>(['Rotkraut', 'Zwiebeln', 'scharf', 'Tomate']);

  protected selectedOrderForm = new FormGroup({
    order: new FormControl<OrderItem | null>(null),
  });

  protected myOrderForm = new FormGroup({
    mealType: new FormControl<String | null>(null),
    mealKind: new FormControl<String | null>(null),
    with: new FormControl<String | null>(null),
    without: new FormControl<String | null>(null),
  });

    protected readonly stringify: TuiStringHandler<OrderItem | null> = (order) => {
    if (order) return order.name;
    return '';
  };
  protected readonly filter: TuiFilterByInputOptions<OrderItem>['filter'] = (
    items,
    value,
  ) =>
    items.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );
}
