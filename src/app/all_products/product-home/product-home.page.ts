import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavigationHandler } from 'src/app/_services/navigation-handler.service';
import { FindstorePage } from 'src/app/findstore/findstore.page';
import { ProductfindstorePage } from '../productfindstore/productfindstore.page';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.page.html',
  styleUrls: ['./product-home.page.scss'],
})
export class ProductHomePage implements OnInit {
  storeName: string;

  constructor(private nav: NavigationHandler,
    public modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }

  async openLocationSearch() {
    // const storeType = await this.storage.get('storeSelectionBy');
    const storeType = localStorage.getItem('productstoreSelectionBy');
    const modal = await this.modalController.create({
      component: ProductfindstorePage,
      cssClass: 'my-custom-class',
      componentProps: {
        storelocation: this.storeName,
        type: storeType
      }
    });
    modal.onWillDismiss().then(response => {
      if (response.data.type) {
        // this.storage.set('productstoreSelectionBy', response.data.type);
        localStorage.setItem('productstoreSelectionBy', response.data.type)
        this.storeName = response.data.display;
        if (response.data.type === 'store') {
          // this.storage.set('productstore', response.data);
          localStorage.setItem('productstore', JSON.stringify(response.data))
          this.router.navigate(['/productpage']);
        }
        else {
          // this.storage.set('productlocationCrypt', response.data);
          localStorage.setItem('productlocationCrypt', response.data)

        }
      }
    });
    return await modal.present();
  }
  goBack(url: string) {
    this.nav.GoBackTo(url);
  }

}
