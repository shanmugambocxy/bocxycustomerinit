import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductHomePageRoutingModule } from './product-home-routing.module';

import { ProductHomePage } from './product-home.page';
import { FindStoreService } from 'src/app/findstore/findstore.service';
import { CustomerNotificationService } from 'src/app/notifications/notfications.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductHomePageRoutingModule
  ],
  declarations: [ProductHomePage],
  providers: [FindStoreService, CustomerNotificationService]
})
export class ProductHomePageModule { }
