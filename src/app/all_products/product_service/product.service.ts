import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { ErrorhandlerService } from 'src/app/_services/errorhandler.service';
const rootUrl = `${environment.productApiUrl}`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient,
    public navCtrl: NavController,
    private eh: ErrorhandlerService) { }



  getProduct(): Observable<{ data: any }> {
    return this.http.post<{ data: any, status: string }>(`${environment.productApiUrl}getProduct`, {
    }, httpOptions)
      .pipe(
        tap(_ => {
          console.log('getProduct', _);
        }),
        catchError(this.eh.handleHttpError<{ data: any, status: string }>('get product error'))
      );
  }


  public getCall(url: any) {
    return this.http.get<any>(`${rootUrl}${url}`)
      .pipe(catchError(this.errroHandler))
  }


  public postCall(uri: any, body: any) {
    const url = `${rootUrl}${uri}`;
    return this.http.post<any>(url, body)
      .pipe(catchError(this.errroHandler))
  }
  public putCall(uri: any, body: any) {
    const url = `${rootUrl}${uri}`;
    return this.http.put<any>(url, body)
      .pipe(catchError(this.errroHandler))
  }


  public errroHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getProductData() {
    // `${rootUrl}${url}`
    let url = `${rootUrl}Product/getProduct`;
    return this.http.get(url);
  }
  CustomerLogin(body) {
    let url = `${rootUrl}Customer/loginCustomer`;
    return this.http.post(url, body);
  }
  CustomerLoginForget(body) {
    let url = `${rootUrl}Customer/forgetPassword`;
    return this.http.post(url, body);
  }
  CustomerSignUp(body) {
    let url = `${rootUrl}Customer/customerSignup`;
    return this.http.post(url, body);
  }
  CustomerUpdate(body) {
    let url = `${rootUrl}Customer/updateCustomer`;
    return this.http.post(url, body);
  }
  verifyOTP(otp) {
    let url = `${rootUrl}Customer/verifyCustomerOtp/${otp}`;
    return this.http.get(url);
  }
  resendOTP(body) {
    let url = `${rootUrl}Customer/resendOtp`;
    return this.http.post(url, body);
  }
  resetPassword(body) {
    let url = `${rootUrl}Customer/resetPassword`;
    return this.http.post(url, body);
  }
  //order
  createorder(body) {
    let url = `${rootUrl}Order/createOrder`;
    return this.http.post(url, body);
  }
}
