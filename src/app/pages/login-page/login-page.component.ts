import { Component } from '@angular/core';
import { LoginComponent } from "../../features/login/login.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent],
  template: '<app-login />'
})
export class LoginPageComponent {

}
