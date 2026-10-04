import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderHistory } from './view-order-history';

describe('ViewOrderHistory', () => {
  let component: ViewOrderHistory;
  let fixture: ComponentFixture<ViewOrderHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrderHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOrderHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
