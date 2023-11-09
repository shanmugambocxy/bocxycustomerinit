import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { NavigationHandler } from 'src/app/_services/navigation-handler.service';
import { FindstorePage } from 'src/app/findstore/findstore.page';
import { ProductfindstorePage } from '../productfindstore/productfindstore.page';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.page.html',
  styleUrls: ['./product-home.page.scss'],
})
export class ProductHomePage implements OnInit {
  storeName: string;
  @ViewChild('homeSlider') slides: IonSlides;
  @ViewChild('brandSlider') brandslides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    autoplay: false
  };
  brandslideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: false
  };
  skipLogin: boolean;
  lang: any;
  totalNotficationsCount: number;
  homeslides = [
    { servicename: 'Youthful Haircut', description: 'Haircuts are not merely new hairstyles, but a new you!', image: './assets/img/offer2.jpg' },
    { servicename: 'Bridal Makeup', description: 'Your fairy tale wedding is now a reality!', image: './assets/img/offer1.jpg' },
    { servicename: 'Soothing Facial (Women)', description: 'Nourish your skin and calm your mind with a soothing facial', image: './assets/img/offer3.jpg' }
  ];
  constructor(private nav: NavigationHandler,
    public modalController: ModalController,
    private router: Router, public translate: TranslateService) { }

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
