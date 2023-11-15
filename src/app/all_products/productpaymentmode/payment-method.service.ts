import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorhandlerService } from 'src/app/_services/errorhandler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  paymentURL: any = 'https://payment-bocxy.ap-south-1.elasticbeanstalk.com/api/hdfcPayment'
  constructor(private http: HttpClient,
    private eh: ErrorhandlerService) { }




  payUsingHDFC(data: any): Observable<{ data: any, status: string }> {
    return this.http.post<{ data: any, status: string }>(`${this.paymentURL}`, {
      amount: data.amount
    }, httpOptions)
      .pipe(
        tap(_ => {
          console.log('failed', _);
        }),
        catchError(this.eh.handleHttpError<{ data: any, status: string }>('failed'))
      );
  }



  // this.http.post('https://payment-bocxy.ap-south-1.elasticbeanstalk.com/api/hdfcPayment', 
}
