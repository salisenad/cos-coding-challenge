import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth-service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(
      res => {
        this.isLoggedIn = res;
      }
    )
  }


  logout() {
    this.authService.logout();
  }
}
