import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';
import { MatButtonModule } from '@angular/material/button';



import { LoginComponent } from './component/main/login/login.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { RegisterComponent } from './component/main/register/register.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListDataComponent } from './component/user-list-data/user-list-data.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { FoodListMenuComponent } from './component/food-list-menu/food-list-menu.component';
import { FoodListPopupComponent } from './component/food-list-popup/food-list-popup.component';
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
    UserListDataComponent,
    FooterComponent,
    FoodListMenuComponent,
    FoodListPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatherModule.pick(icons),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
