import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './features/header/header.component'
import { FooterComponent } from "./features/footer/footer.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { BurgerComponent } from './pages/burger/burger.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, WelcomeComponent, BurgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
