import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopOrderSummary } from './view-shop-order-summary';

describe('ViewShopOrderSummary', () => {
  let component: ViewShopOrderSummary;
  let fixture: ComponentFixture<ViewShopOrderSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewShopOrderSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewShopOrderSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
