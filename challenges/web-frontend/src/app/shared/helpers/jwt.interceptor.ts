import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth-service/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authService.currentUserValue;
    let authToken: any = localStorage.getItem('token')
    let userId: any = localStorage.getItem('userId')
    if (currentUser && authToken) {
      request = request.clone({
        headers: new HttpHeaders({
          userId: userId,
          authToken: authToken
        }),
      });
    }
    return next.handle(request);
  }


}
