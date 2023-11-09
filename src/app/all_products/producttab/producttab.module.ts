import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducttabPageRoutingModule } from './producttab-routing.module';

import { ProducttabPage } from './producttab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,

    ProducttabPageRoutingModule,
  ],
  declarations: [ProducttabPage]
})
export class ProducttabPageModule { }
