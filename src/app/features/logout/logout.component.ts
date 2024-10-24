import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: ''
})
export class LogoutComponent {
  authServce = inject(AuthService);

  constructor(private location: Location) {
    this.authServce.logout().subscribe();
    this.location.back();
  }

}
