import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import routes from './shop.routes';

@NgModule({
  imports: [routes],
  declarations: [ShopComponent, HeaderComponent, NavbarComponent, TopbarComponent]
})
export default class ShopModule{}
