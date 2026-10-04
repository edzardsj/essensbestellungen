import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewOrder } from './view-new-order';

describe('ViewNewOrder', () => {
  let component: ViewNewOrder;
  let fixture: ComponentFixture<ViewNewOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNewOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNewOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
