import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../core/services/navigation/navigation.service';

const BURGERJO =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width = "30" height = "28" viewBox = "0 0 30 28" fill = "none" >
    <rect width="30" height = "4" rx = "2" fill = "#0078D0" />
    <rect y="6" width = "30" height = "4" rx = "2" fill = "#FFB114" />
    <rect y="12" width = "30" height = "4" rx = "2" fill = "black" />
    <rect y="18" width = "30" height = "4" rx = "2" fill = "#00A651" />
    <rect y="24" width = "30" height = "4" rx = "2" fill = "#F0282D" />
  </svg>
`;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  links = inject(NavigationService).getAll();
  @Output() openBurgerButtonClick = new EventEmitter()

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral('burgerjo', sanitizer.bypassSecurityTrustHtml(BURGERJO));
  }

  openBurgerClick() {
    this.openBurgerButtonClick.emit();
  }
}
