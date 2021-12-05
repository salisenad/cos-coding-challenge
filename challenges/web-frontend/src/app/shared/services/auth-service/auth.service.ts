import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../../../environments/environment";
import {User} from "../../models/User";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";


@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser: Observable<any>;
  currentUserVal: BehaviorSubject<any>;

  constructor(private http: HttpClient,private router: Router) {
    this.currentUserVal = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserVal.asObservable();
  }


   get  currentUserValue(): any {
    return this.currentUserVal.value;
  }


  login( userMailId: string, password: string ) {
    return this.http.put<User>( `${environment.url}/v1/authentication/${userMailId}`,{password: password, meta: 'string'}).pipe(
      map(
        res => {
          return res;
        }),
      catchError(( err: any ) => {
        console.log( err );
        return err;
      })
    )
  }


  logout(): void {
    this.currentUserVal.next(null);
    localStorage.clear();
    this.router.navigate(['/login'])
  }


}
