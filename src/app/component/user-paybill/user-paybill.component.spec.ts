import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaybillComponent } from './user-paybill.component';

describe('UserPaybillComponent', () => {
  let component: UserPaybillComponent;
  let fixture: ComponentFixture<UserPaybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaybillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
