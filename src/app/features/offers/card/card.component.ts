import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IOffer } from '../../../core/interfaces/offer.interface';

@Component({
  selector: 'app-offers-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() offer = {} as IOffer;
  @Input() child = {} as number;

  bgColor() {
    // JO official extended colors
    let colors = ["#5ED6FF", "#FFE045", "#B4B4B4", "#6BDB83", "#FFC7C9"];
    return colors[this.child % 5];
  }
}
