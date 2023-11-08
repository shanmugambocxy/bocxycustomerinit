import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductfindstorePageRoutingModule } from './productfindstore-routing.module';

import { ProductfindstorePage } from './productfindstore.page';
import { ProductfindstoreService } from './productfindstore.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductfindstorePageRoutingModule,
    TranslateModule
  ],
  declarations: [ProductfindstorePage],
  providers: [ProductfindstoreService]
})
export class ProductfindstorePageModule { }
