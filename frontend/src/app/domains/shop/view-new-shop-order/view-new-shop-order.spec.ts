import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewNewShopOrder } from './view-new-shop-order';

describe('ViewNewShopOrder', () => {
  let component: ViewNewShopOrder;
  let fixture: ComponentFixture<ViewNewShopOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNewShopOrder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewNewShopOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
