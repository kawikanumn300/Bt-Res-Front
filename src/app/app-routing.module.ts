import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListMenuComponent } from './component/food-list-menu/food-list-menu.component';
import { FooterComponent } from './component/main/footer/footer.component';

import { LoginComponent } from './component/main/login/login.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { RegisterComponent } from './component/main/register/register.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { UserListDataComponent } from './component/user-list-data/user-list-data.component';

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
    path: "navbar",
    component: NavbarComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path: "mainmenu",
    component: MainmenuComponent
  },
  {
    path: "food-list-menu",
    component:FoodListMenuComponent
  },
  {
    path:"user-list-data",
    component:UserListDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
