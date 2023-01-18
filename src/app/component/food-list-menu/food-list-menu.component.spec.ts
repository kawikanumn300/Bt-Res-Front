import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListMenuComponent } from './food-list-menu.component';

describe('FoodListMenuComponent', () => {
  let component: FoodListMenuComponent;
  let fixture: ComponentFixture<FoodListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
