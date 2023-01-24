import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListOrderDayComponent } from './food-list-order-day.component';

describe('FoodListOrderDayComponent', () => {
  let component: FoodListOrderDayComponent;
  let fixture: ComponentFixture<FoodListOrderDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListOrderDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListOrderDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
