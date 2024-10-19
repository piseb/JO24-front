import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css'
})
export class BurgerComponent {
  links = inject(NavigationService).getAll();
  @Output() closeBurgerButtonClick = new EventEmitter()

  closeBurgerClick() {
    this.closeBurgerButtonClick.emit();
  }
}
