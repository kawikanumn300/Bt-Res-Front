import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryPayComponent } from './user-history-pay.component';

describe('UserHistoryPayComponent', () => {
  let component: UserHistoryPayComponent;
  let fixture: ComponentFixture<UserHistoryPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHistoryPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHistoryPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
