import { Component, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationHandler } from 'src/app/_services/navigation-handler.service';
import { PaymentMethodService } from './payment-method.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ErrorhandlerService } from 'src/app/_services/errorhandler.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productpaymentmode',
  templateUrl: './productpaymentmode.page.html',
  styleUrls: ['./productpaymentmode.page.scss'],
})
export class ProductpaymentmodePage implements OnInit {
  detailsForm: FormGroup;
  paymentPage: any;
  userData: any;
  totalAmount: number = 4500;
  trustedFormbody: any;
  nonseamless: any;
  // @ViewChild() nonseamless:Form;
  constructor(private fb: FormBuilder,
    private nav: NavigationHandler,
    private paymentService: PaymentMethodService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private eh: ErrorhandlerService) { }

  ngOnInit() {
    this.onInit();
  }
  onInit() {
    this.detailsForm = this.fb.group({
      emailid: [null, Validators.required],
      phoneNo: [null, Validators.required],
      shippingaddress: [null, Validators.required],
      paymentmethod: [null, Validators.required]
    })
  }


  addressSelection(val, data?: any, type?: any) {
    this.detailsForm.get('addressType').setValue(val);
    if (val === 'exist') {
      this.detailsForm.get('address').setValue(data.doorNoAndStreet ? data.doorNoAndStreet : '');
      this.detailsForm.get('cityName').setValue(data.city ? data.city : '');
      this.detailsForm.get('stateName').setValue(data.state ? data.state : '');
      this.detailsForm.get('pinCode').setValue(data.pincode ? data.pincode : '');
      this.detailsForm.get('countryName').setValue(data.country ? data.country : '');
      this.detailsForm.get('landmark').setValue(data.landmark ? data.landmark : '');

    }
  }

  goBack() {
    this.nav.GoBackTo('/product-cart')
  }

  placeOrder() {
    let data = {
      amount: this.totalAmount
    }
    this.paymentService.payUsingHDFC(data).subscribe(
      (response: any) => {
        console.log(response);
        let getResponse = this.sanitizer.bypassSecurityTrustHtml(response);
        console.log('getResponse');

        // Automatically submit the form
        setTimeout(() => {
          const formElement = document.querySelector('form');
          console.log('form:', formElement);
          if (formElement) {
            console.log('form submit');
            formElement.submit();
          }
        }, 1000);
      }, (error) => {
        console.log(error);
      }
    )
  }


  hdfcPayment() {
    const data = {
      amount: this.totalAmount
    };


    // this.http.post('https://payment-bocxy.ap-south-1.elasticbeanstalk.com/api/hdfcPayment', data, { responseType: 'text' }).subscribe(

    this.http.post('http://localhost:3001/api/hdfcPayment', data, { responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response);
        this.trustedFormbody = this.sanitizer.bypassSecurityTrustHtml(response);
        // Automatically submit the form
        setTimeout(() => {
          // const formElement = document.getElementById('nonseamless');
          const formElement = document.getElementById('nonseamless') as HTMLFormElement;
          // const formElement = this.trustedFormbody.nonseamless.nativeElement as HTMLFormElement;
          console.log('form:', formElement);
          if (formElement) {
            console.log('form submit');
            formElement.submit();
          }
        }, 3000);
      }, (error) => {
        console.log('payment', error);
      }
    );
  }
}
