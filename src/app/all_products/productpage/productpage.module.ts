import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductpagePageRoutingModule } from './productpage-routing.module';

import { ProductpagePage } from './productpage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductpagePageRoutingModule,
    ReactiveFormsModule,
    // ProductsRoutingModule

  ],
  declarations: [ProductpagePage,

  ]
})
export class ProductpagePageModule { }
