import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEditShop } from './view-edit-shop';

describe('ViewEditShop', () => {
  let component: ViewEditShop;
  let fixture: ComponentFixture<ViewEditShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditShop]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewEditShop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
