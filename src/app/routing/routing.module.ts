import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { OrderComponent } from '../order/order.component';
import { CustomersComponent } from '../customers/customers.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
