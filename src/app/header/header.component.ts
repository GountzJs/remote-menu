import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  AuthenticationService,
  SubscriptionManagerService,
} from 'kit-utilities';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _isLogin: boolean;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly subscriptionsService: SubscriptionManagerService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginListener();
  }

  ngOnDestroy(): void {
    this.subscriptionsService.destroy();
  }

  private initLoginListener(): void {
    const sub = this.authenticationService.listener.subscribe((data) => {
      this.isLogin = Boolean(data.auth.token);
    });
    this.subscriptionsService.load('login-listener', sub);
  }

  logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/auth/sign-in']);
  }

  get isLogin(): boolean {
    return this._isLogin;
  }

  set isLogin(value: boolean) {
    this._isLogin = value;
  }
}
