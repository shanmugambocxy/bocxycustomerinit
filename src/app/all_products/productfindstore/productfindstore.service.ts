import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorhandlerService } from 'src/app/_services/errorhandler.service';
import { MerchantStore } from 'src/app/findstore/findstore.model';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductfindstoreService {

  constructor(private http: HttpClient, private eh: ErrorhandlerService) { }



  getMerchantStoreList(): Observable<{ data: MerchantStore[], status: string }> {
    return this.http.get<{ data: MerchantStore[], status: string }>(`${environment.apiUrl}merchantStoresList`).pipe(
      tap(_ => console.log('Merchant store list fetch')),
      catchError(this.eh.handleHttpError<{ data: MerchantStore[], status: string }>('Failed to fetch merchant store list'))
    );
  }
}
