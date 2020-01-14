import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedState: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.loggedState = this.authService.loggedIn;
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: id === 3 ? '1' : '0' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.login();
    this.loggedState = this.authService.loggedIn;
  }

  onLogout() {
    this.authService.logout();
    this.loggedState = this.authService.loggedIn;
  }
}
