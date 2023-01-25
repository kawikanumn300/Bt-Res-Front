import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryOrderComponent } from './user-history-order.component';

describe('UserHistoryOrderComponent', () => {
  let component: UserHistoryOrderComponent;
  let fixture: ComponentFixture<UserHistoryOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHistoryOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHistoryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
