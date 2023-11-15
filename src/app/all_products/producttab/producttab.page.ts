import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-producttab',
  templateUrl: './producttab.page.html',
  styleUrls: ['./producttab.page.scss'],
})
export class ProducttabPage implements OnInit {
  skipLogin: boolean;
  lang: any;
  constructor(private modalController: ModalController, public translate: TranslateService,
    public TranslateModule: TranslateModule,
    public navCtrl: NavController,) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    console.log('tabs');

  }
  goToHome() {
    this.navCtrl.navigateRoot('/home');

  }

}
