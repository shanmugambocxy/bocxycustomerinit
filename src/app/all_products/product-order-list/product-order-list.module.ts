import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductOrderListPageRoutingModule } from './product-order-list-routing.module';

import { ProductOrderListPage } from './product-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductOrderListPageRoutingModule
  ],
  declarations: [ProductOrderListPage]
})
export class ProductOrderListPageModule {}
