import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable,timer} from "rxjs";
import {Auction, ResponseAuctions} from "../../models/Auction";
import {map, switchMap, retry, share, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor( private http: HttpClient ) {}

  getAuctions(): Observable<Auction[]> {
    let auctionsHttpCall: Observable<Auction[]> = this.http.get<ResponseAuctions>(`${environment.url}/v2/auction/buyer/`).pipe(
        map((res: { items: any; }) => {
          return res.items;
        }),
        catchError(( err: any ) => {
          console.log( err );
          return err;
        }),
        retry(3),
        share()
      );
      return timer(1, 20000).pipe(
        switchMap(() => {
          return auctionsHttpCall;
        })
      );
  }

}
