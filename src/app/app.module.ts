import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';
import { MatButtonModule } from '@angular/material/button';
import {
  NgbTypeaheadModule,
  NgbDatepickerModule,
  NgbAlertModule,
  NgbModalModule, NgbModalOptions,

  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FoodListOrderDayComponent } from './component/food-list-order-day/food-list-order-day.component'
import { JsonPipe, NgIf } from '@angular/common';
import { LoginComponent } from './component/main/login/login.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { RegisterComponent } from './component/main/register/register.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { FoodListMenuComponent } from './component/food-list-menu/food-list-menu.component';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';

// import {
//   DxButtonModule,
//   DxCheckBoxModule,
//   DxDateBoxModule,
//   DxListModule,
//   DxLoadIndicatorModule,
//   DxLoadPanelModule,
//   DxSelectBoxModule,
//   DxValidationSummaryModule,
//   DxValidatorModule,
//   DxRadioGroupModule,
//   DxGalleryModule,
//   DxCalendarModule,
//   DxDataGridModule,
//   DxBulletModule,
//   DxTemplateModule,
//   DxTextBoxModule,
//   DxFormModule,
//   DxTooltipModule,

// } from 'devextreme-angular';
import { LogoutModalComponent } from './component/main/logout-modal/logout-modal.component';
import { LoginModalComponent } from './component/main/login-modal/login-modal.component';

import { UserHistoryOrderComponent } from './component/user-history-order/user-history-order.component';
import { UserHistoryPayComponent } from './component/user-history-pay/user-history-pay.component';
import { UserEditComponent } from './component/main/user-edit/user-edit.component';
import { UserPaymentComponent } from './component/user-payment/user-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModalComponent } from './component/main/register-modal/register-modal.component';
import { FoodSelectModalComponent } from './component/assete/food-select-modal/food-select-modal.component';

const icons = {

  LogOut
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainmenuComponent,
    FooterComponent,
    FoodListMenuComponent,
    UserHistoryOrderComponent,
    FoodListOrderDayComponent,
    LogoutModalComponent,
    LoginModalComponent,
    UserHistoryPayComponent,
    UserEditComponent,
    UserPaymentComponent,
    RegisterModalComponent,
    FoodSelectModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatherModule.pick(icons),
    BrowserAnimationsModule,
    DecimalPipe,
    NgFor,
    AsyncPipe,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    NgbAlertModule,
    JsonPipe,
    NgbModalModule,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgIf,

  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
