import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCollectionPage } from './product-collection.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCollectionPageRoutingModule {}
