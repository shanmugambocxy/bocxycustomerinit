import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductpaymentmodePage } from './productpaymentmode.page';

const routes: Routes = [
  {
    path: '',
    component: ProductpaymentmodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductpaymentmodePageRoutingModule {}
