import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationHandler } from 'src/app/_services/navigation-handler.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.page.html',
  styleUrls: ['./product-cart.page.scss'],
})
export class ProductCartPage implements OnInit {
  id: number;
  isByValue: boolean = false;
  valueSelected: any;
  discount: number;
  redeemVoucher: any;
  payableAmount: number;
  isCash: boolean = false;
  totalAmount: number = 5000;
  // appointment: AppointmentDetail;
  addTip: number = 0;
  // appointment: any;
  bookedServices: any = [];
  subTotal: number = 0;
  CGST: number = 0.09;
  SGST: number = 0.09;
  cardValue = [{ 'id': 1, 'value': 'Cash', 'isSelected': false, icon: 'cash-outline' }, { 'id': 2, 'value': 'Card', 'isSelected': false, icon: 'card-outline' }, { 'id': 3, 'value': 'UPI', 'isSelected': false, icon: 'qr-code-outline' }];
  billValue = [{ 'id': 1, 'value': 'Sub Total' }, { 'id': 2, 'value': 'CGST' }, { 'id': 3, 'value': 'SGST' }, { 'id': 4, 'value': 'Grand Total' }]
  quantity: number = 1;

  constructor(private nav: NavigationHandler,
    private navctrl: NavController
  ) { }

  ngOnInit() {
  }
  incrementQty() {
    this.quantity += 1;
    let price = 100;
    // this.price = this.quantity * price;
  }
  decrementQty() {
    if (this.quantity > 0) {
      this.quantity -= 1;
      let price = 100;

      // this.price = this.quantity * price;

    }

  }
  addTipChange() {
    console.log('tip', this.addTip);

  }


  openCheckoutPage() {
    this.nav.GoForward('productpaymentmode')
  }
  goBack() {
    // this.nav.GoBackTo(url);
    this.navctrl.back();
  }
}
