import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthUtils} from '../utility/auth-utils';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = isPlatformBrowser(this.platformId) ? !!AuthUtils.getAuthToken() : null;
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }
}
