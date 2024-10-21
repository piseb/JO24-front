import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IEvent } from '../../../core/interfaces/event.interface';
import { IDiscipline } from '../../../core/interfaces/discipline.interface';

@Component({
  selector: 'app-events-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event = {} as IEvent;
  @Input() discipline = {} as IDiscipline;
  @Input() child = {} as number;

  bgColor() {
    // JO official extended colors
    let colors = ["#0078D0", "#FFB114", "#5A5A5A", "#00A651", "#F0282D"];
    return colors[this.child % 5];
  }
}
