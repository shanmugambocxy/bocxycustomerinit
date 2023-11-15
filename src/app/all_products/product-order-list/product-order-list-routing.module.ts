import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductOrderListPage } from './product-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductOrderListPageRoutingModule {}
