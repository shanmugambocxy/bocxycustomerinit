import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product_service/product.service';
import { Router } from '@angular/router';
import { UtilService } from '../product_service/util.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { NavigationHandler } from 'src/app/_services/navigation-handler.service';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @ViewChild('homeSlider') slides: IonSlides;

  currentProductDetails: any
  panelOpenState: any
  currentImageNew = 'https://ecommapi.bocxy.com//files/admin-files-1696510268119.jpeg';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
    // autoplay: true,
    pagination: false
  };
  imagelist: any = [
    {
      'id': 1,
      'src': 'https://ecommapi.bocxy.com//files/admin-files-1696510268119.jpeg'
    },
    {
      'id': 2,
      'src': 'https://ecommapi.bocxy.com//files/admin-files-1696566743496.jpeg'
    }
  ]
  productPolicies = [
    { img: 'assets/homeImg/lifetime_service.webp', Name: 'Lifetime Plating Service' },
    { img: 'assets/homeImg/warranty.png', Name: '6 Month Warranty' },
    { img: 'assets/homeImg/returns.avif', Name: '30 Day Easy Returns' },
    { img: 'assets/homeImg/free_shipping.webp', Name: 'Free Shipping' }
  ]
  currentUserData: any;
  cartList: any = [];
  wishList: any = [];
  addToWishlist: boolean = false;
  productList: any;
  currentImage: any;
  productImgList: any;
  recentList: any[];
  constructor(private productService: ProductService, private router: Router, private util: UtilService,
    private nav: NavigationHandler,
    // , private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // this.currentProductDetails = history.state.data
    // let param= this.activeRoute.queryParamMap.subscribe(e=>{
    //   this.currentProductDetails=e['productDetails']
    // }) 

    // this.currentImage = this.currentProductDetails.productImages[0]
    // this.productImgList = []
    // this.currentProductDetails.productImages.map((e: any) => {
    //   this.productImgList.push({
    //     imgUrl: e, active: false
    //   })
    // })
    // console.log(this.currentProductDetails)
    // this.recentlyViewedList()
    // let userData = this.util.getObservable().subscribe((res) => {
    //   if (res.currentUserData && res.currentUserData) {
    //     this.currentUserData = res.currentUserData
    // this.currentUserData.productsViewed['productId'].push(this.currentProductDetails.productId)
    //     this.wishList = res.addWishlistCount ? res.addWishlistCount : []
    //     this.cartList = res.addCartlistCount ? res.addCartlistCount : []
    //     this.wishList.forEach(e => {
    //       this.addToWishlist = this.currentProductDetails.productId == e?._id && !this.addToWishlist ? true : false
    //     })
    //   } else {
    //     this.wishList = res.addWishlistCount || []
    //     this.cartList = res.addCartlistCount || []
    //     // if(localStorage.getItem('addToCartList')) this.cartList=localStorage.getItem('addToCartList')
    //     this.wishList.forEach(e => {
    //       this.addToWishlist = this.currentProductDetails.productId == e?._id && !this.addToWishlist ? true : false
    //     })
    //   }

    // });

    await this.getAllProduct()
  }

  activeImage(val) {
    this.currentImage = val.imgUrl
    this.currentProductDetails.productImages.map(e => e['active'] = false)
    val['active'] = true
  }
  subMenuOpen(id) {
    $('#' + id).toggleClass('open').siblings().slideToggle(300);
  }
  copyUrl() {
    return window.location.href
  }

  async addToCart() {
    if (this.currentUserData) {
      this.cartList = this.currentUserData.data.cartProductDetails || []
      if (this.cartList.length) {
        this.cartList.forEach(e => {
          if (e.productId == this.currentProductDetails._id) {
            e['quantity'] += 1
          } else {
            this.cartList.push({
              "data": this.currentProductDetails,
              "productId": this.currentProductDetails._id,
              "quantity": 1,
              "_id": this.currentProductDetails._id
            })
          }
        })
      } else {
        this.cartList.push({
          "data": this.currentProductDetails,
          "productId": this.currentProductDetails._id,
          "quantity": 1,
          "_id": this.currentProductDetails._id
        })
      }
      this.cartList = this.util.unique(this.cartList, ['productId'])
      this.currentUserData.data.cartProductDetails = this.cartList
      // this.cartList.map(e=>e.productId==this.currentProductDetails._id ? e['data']=this.currentProductDetails : false)
      // this.util.setObservable('addCartlistCount',this.cartList)
      // await this.updateCustomer()
    } else {
      if (this.cartList.length) {
        this.cartList.forEach(e => {
          if (e.productId == this.currentProductDetails._id) {
            e['quantity'] += 1
          } else {
            return this.cartList.push({
              "data": this.currentProductDetails,
              "quantity": 1,
              "_id": this.currentProductDetails._id
            })
          }
        })
      } else {
        this.cartList.push({
          "data": this.currentProductDetails,
          "quantity": 1,
          "_id": this.currentProductDetails._id
        })
      }
      this.cartList = this.util.unique(this.cartList, ['_id'])
    }
    localStorage.setItem('addToCartList', this.cartList)
    this.util.setObservable('addCartlistCount', this.cartList)
    this.currentUserData && this.currentUserData.data ? this.updateCustomer('addToCart') : null
    this.router.navigate(['/jewel/cart'])
  }

  async BuyItNow() {
    await this.addToCart()
    this.router.navigate(['/jewel/customer-address'])
  }

  async addWishlist() {
    // this.addToWishlist=!this.addToWishlist
    if (this.currentUserData) {
      this.currentUserData.data.wishlistProductIdDetails.forEach(ele => {
        if (ele.data) {
          this.wishList = this.currentUserData.data.wishlistProductIdDetails || []
        } else {
          this.wishList = []
          let val = this.productList.filter(x => this.currentUserData.data.wishlistProductIdDetails.some(y => y == x._id))
          val.map(e => {
            this.wishList.push({
              "_id": e._id,
              "data": e,
            })
          })
        }
      })


      this.wishList.push({
        "_id": this.currentProductDetails._id,
        "data": this.currentProductDetails,
      })
      this.wishList = this.util.unique(this.wishList, ['_id'])
      let formatedWish = this.wishList.map(e => e._id)
      this.currentUserData.data.wishlistProductIdDetails = formatedWish
      this.util.setObservable('addWishlistCount', this.wishList)
      this.util.setObservable('currentUserData', this.currentUserData)
    } else {
      this.wishList.push({
        "_id": this.currentProductDetails._id,
        "data": this.currentProductDetails,
      })

      this.wishList = this.util.unique(this.wishList, ['_id'])
      this.util.setObservable('addWishlistCount', this.wishList)
    }
    // let snackBarRef = this.snackBar.open("Wishlist updated successfully", 'Close', {
    //   duration: 5000
    // });
    this.currentUserData && this.currentUserData.data ? this.updateCustomer('wishlist') : null
    this.router.navigate(['/jewel/add-to-wishlist'])
  }

  async getAllProduct() {
    return this.productService.getCall('Product/getProduct').subscribe(async (data: any) => {
      console.log(data)
      this.productList = data
      this.productList = this.productList.data
      this.productList.forEach(e => e['wishList'] = false)
    })
  }
  recentlyViewedList() {
    this.recentList = []
    // this.productList.forEach(e=>{
    //   this.recentList.push(this.currentUserData.productsViewed.productId.includes(e._id)) 
    // })
    // let val = this.currentUserData.productsViewed.productId.includes(sessionStorage.getItem('user_id'))
  }

  updateCustomer(type?: any) {
    console.log(this.currentUserData)
    let body;
    if (type == 'addToCart') {
      let temp = _.cloneDeep(this.currentUserData.data.cartProductDetails)
      temp.map(e => {
        delete e.data
        delete e._id
      })
      body = {
        // "_id": this.currentUserData.data._id,
        "email": this.currentUserData.data.email,
        "cartProductDetails": temp,
      }
    } else {
      let temp = _.cloneDeep(this.currentUserData.data.wishlistProductIdDetails)
      temp.map(e => {
        delete e.data
      })
      body = {
        // "_id": this.currentUserData.data._id,
        "email": this.currentUserData.data.email,
        "wishlistProductIdDetails": temp,
      }
    }

    return this.productService.putCall('Customer/updateCustomer', body).subscribe(async data => {
      // let snackBarRef = this.snackBar.open(type == 'addToCart' ? "Added to cart successfully" : 'Wishlist added successfully', 'Close', {
      //   duration: 5000
      // });
      console.log(data)
    }, err => {
      console.log('error in update in customer data', err)
    })
  }
  selectImage(pic: any) {
    this.currentImageNew = pic.src;
  }

  slidePrev() {
    this.slides.slidePrev();

  }
  slideNext() {
    this.slides.slideNext();
  }
  goBack(url: string) {
    this.nav.GoBackTo(url);
  }
}
