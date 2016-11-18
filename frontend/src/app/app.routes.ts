import { RouterModule } from '@angular/router';

const routes = [
  { path: '/admin', loadChildren: './shop/shop.module' }
];

export default RouterModule.forRoot(routes);
