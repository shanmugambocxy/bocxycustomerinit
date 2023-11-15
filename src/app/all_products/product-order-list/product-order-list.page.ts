import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-order-list',
  templateUrl: './product-order-list.page.html',
  styleUrls: ['./product-order-list.page.scss'],
})
export class ProductOrderListPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }


  goBack() {
    // this.nav.GoBackTo(url);
    this.navctrl.back();
  }
}
