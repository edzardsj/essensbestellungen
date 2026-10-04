import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOverview } from './view-overview';

describe('ViewOverview', () => {
  let component: ViewOverview;
  let fixture: ComponentFixture<ViewOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
