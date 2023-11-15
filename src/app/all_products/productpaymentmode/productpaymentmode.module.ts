import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductpaymentmodePageRoutingModule } from './productpaymentmode-routing.module';

import { ProductpaymentmodePage } from './productpaymentmode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductpaymentmodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductpaymentmodePage]
})
export class ProductpaymentmodePageModule { }
