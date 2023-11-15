import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationHandler } from '../../_services/navigation-handler.service';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
  };
  productList: any;
  allProductList: any;
  listByCategory: any[];
  giftProducts: any[];
  listByColour: any = [
    { img: "assets/color/1.svg", colour: 'Silver' },
    { img: "assets/color/2.svg", colour: 'Rose Gold' },
    { img: "assets/color/3.svg", colour: 'Gold' },
    { img: "assets/color/4.svg", colour: 'Oxidised Silver' }
  ];
  listByStyle: any = [
    { img: "assets/circle/1.svg", style: 'Everyday' },
    { img: "assets/circle/2.svg", style: 'Office' },
    { img: "assets/circle/3.svg", style: 'Party' },
    { img: "assets/circle/4.svg", style: 'Traditional & Wedding' }]
  constructor(private nav: NavigationHandler,
    private router: Router,

  ) { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay: true
    };
  }
  getlistByCategory() {
    this.listByCategory = []
    this.giftProducts = []
    // this.listByColour=[]
    // this.listByStyle=[]
    this.productList.map(e => {
      if (e.gift) {
        this.giftProducts.push(e)
      }
      this.listByCategory.push({
        data: e,
        category: e.category[0].toLowerCase()
      })
      // this.listByColour.push({
      //   data:e,
      //   colour:e.colour[0].toLowerCase()
      // })
      // this.listByStyle.push({
      //   data:e,
      //   style:e.style[0].toLowerCase()
      // })
    })
    console.log('', this.listByCategory);
    console.log('', this.listByColour);
    // this.listByStyle=this.util.unique(this.listByStyle,['style'])
    // this.listByColour=this.util.unique(this.listByColour,['colour'])
    // this.listByCategory=this.util.unique(this.listByCategory,['category'])
  }

  getSelectedCollection(row) {
    // return this.router.navigate(['/jewel/product-collections'], { state: { row } })
    // return this.router.navigate(['/product-collections'], { state: { row } })
    this.router.navigate(['/product-collection'], { state: { row } })


  }
  routeToDetails(data?: any) {
    let productName = data.productName.replace(/\s/g, '-')
    let url = `/jewel/product-collections/details/${productName}`
    return this.router.navigate([url], { state: { data } })

    // return this.router.navigate([url],{queryParams:{productDetails:{...data}},  skipLocationChange: true})
  }
  openCart() {
    this.nav.GoForward('/product-cart')
  }

  goBack(url: string) {
    this.nav.GoBackTo(url);
  }

}
