import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from '../../core/services/auth/auth.service';
import { ICredentials } from '../../core/interfaces/credentials';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  readonly username = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  errorMessageUsername = signal('');
  errorMessagePassword = signal('');
  invalidCredentials = false;

  constructor(private location: Location) {
    merge(this.username.statusChanges, this.username.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageUsername());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessagePassword());
  }

  updateErrorMessageUsername() {
    if (this.username.hasError('required')) {
      this.errorMessageUsername.set('Vous devez entrer votre identifiant.');
    } else if (this.username.hasError('username')) {
      this.errorMessageUsername.set("Ce n'est pas un identifiant valide.");
    } else {
      this.errorMessageUsername.set('');
    }
  }

  updateErrorMessagePassword() {
    if (this.password.hasError('required')) {
      this.errorMessagePassword.set('Vous devez entrer votre mot de passe.');
    } else if (this.password.hasError('minlength')) {
      this.errorMessagePassword.set(
        'Vous devez utiliser'
        + this.password.errors!['minlength']['requiredLength']
        + ' caractères.'
      );
    } else {
      this.errorMessagePassword.set('');
    }
  }

  login() {
    if (this.username.valid && this.password.valid) {
      const credentials: ICredentials = {
        username: this.username.value!,
        password: this.password.value!
      };
      const rep = this.authService.login(credentials);
      rep.subscribe({
        // retour à la page précédente si le login réussi
        next: result => { this.location.back(); },
        // sinon informe de l'échec
        error: error => { this.invalidCredentials = true; }
      });
    }
    if (this.authService.isAuthenticated()) {
      console.log("OK OK")
    }
  }

}
