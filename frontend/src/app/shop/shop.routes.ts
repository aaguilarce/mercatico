import { RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";
import { HeaderComponent } from './header/header.component';

const routes = [
  {
    path: '', component: ShopComponent
  }
];

export default RouterModule.forChild(routes);
