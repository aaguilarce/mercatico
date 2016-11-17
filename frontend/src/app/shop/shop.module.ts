import { NgModule } from '@angular/core';
import routes from './shop.routes';
import { FormsModule }from "@angular/forms";
import { SharedModule } from './../shared/shared.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [routes, FormsModule, SharedModule, HttpModule],
  declarations: [
    ShopComponent,
    NavbarComponent,
    TopbarComponent,
    RegisterComponent
  ]
})
export default class ShopModule{}
