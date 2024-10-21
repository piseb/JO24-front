import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '../../core/services/events/events.service';
import { CardComponent } from "../../features/events/card/card.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  private readonly eventsService = inject(EventsService)
  events = this.eventsService.events

  ngOnInit() {
    this.eventsService.getAll().subscribe();
  }
}
