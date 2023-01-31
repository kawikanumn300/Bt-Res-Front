import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListMenuComponent } from './component/food-list-menu/food-list-menu.component';
import { FoodListOrderDayComponent } from './component/food-list-order-day/food-list-order-day.component';
import { FooterComponent } from './component/main/footer/footer.component';

import { LoginComponent } from './component/main/login/login.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { RegisterComponent } from './component/main/register/register.component';
import { UserEditComponent } from './component/main/user-edit/user-edit.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { UserHistoryOrderComponent } from './component/user-history-order/user-history-order.component';
import { UserHistoryPayComponent } from './component/user-history-pay/user-history-pay.component';
import { UserPaymentComponent } from './component/user-payment/user-payment.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "user-edit",
    component: UserEditComponent
  },
  {
    path: "navbar",
    component: NavbarComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path: "mainmenu",
    component: MainmenuComponent,
    data: { animation: 'mainmenuPage' }
  },
  {
    path: "food-list-menu",
    component:FoodListMenuComponent
  },
  {
    path:"foodlistorderday",
    component:FoodListOrderDayComponent
  },
  {
    path:"user-history-order",
    component:UserHistoryOrderComponent
  },
  {
    path:"user-history-pay",
    component:UserHistoryPayComponent
  },
  {
    path:"user-payment",
    component:UserPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
