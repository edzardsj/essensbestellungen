import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavItem } from './card-nav-item';

describe('CardNavItem', () => {
  let component: CardNavItem;
  let fixture: ComponentFixture<CardNavItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNavItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNavItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
