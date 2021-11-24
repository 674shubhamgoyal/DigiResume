import {Component, OnInit} from '@angular/core';
import {AuthRepository} from '../repository/auth-repository';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
  `,
  styles: [``]
})

export class LogoutComponent {

  constructor(private authRepo: AuthRepository, private router: Router) {
    // this.router.navigate(['demo', {outlets: {'chat-r': ['chat']}}]);
    this.authRepo.logout();
    this.router.navigate(['']);
    // window.open('/(chat-r:chat)', '_self');
  }
}
