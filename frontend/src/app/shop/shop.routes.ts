import { RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";

const routes = [
  {
    path: '/admin', component: ShopComponent
  }
];

export default RouterModule.forChild(routes);
