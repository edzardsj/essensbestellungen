import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderHistoryAll } from './view-order-history-all';

describe('ViewOrderHistoryAll', () => {
  let component: ViewOrderHistoryAll;
  let fixture: ComponentFixture<ViewOrderHistoryAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrderHistoryAll],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOrderHistoryAll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
