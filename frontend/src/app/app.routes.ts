import { RouterModule } from '@angular/router';

const routes = [
  { path: '', loadChildren: 'shop/shop.module' }
];

export default RouterModule.forRoot(routes);
