import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductpagePage } from './productpage.page';

const routes: Routes = [
  {
    path: '',
    component: ProductpagePage
  },
  // {
  //   path: 'product-collections',
  //   component: ProductCollectionsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductpagePageRoutingModule { }
