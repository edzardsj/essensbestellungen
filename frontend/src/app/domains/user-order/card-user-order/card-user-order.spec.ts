import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserOrder } from './card-user-order';

describe('CardUserOrder', () => {
  let component: CardUserOrder;
  let fixture: ComponentFixture<CardUserOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUserOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(CardUserOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
