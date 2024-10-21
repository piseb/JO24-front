import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IEvent } from '../../interfaces/event.interface';
import { environment } from '../../../../environments/environment';
import { DisciplinesService } from '../disciplines/disciplines.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly apiUrl = environment.apiURL
  private readonly http = inject(HttpClient);
  private readonly disciplineService = inject(DisciplinesService);
  events = signal<IEvent[]>([]);

  getAll(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.apiUrl + "events/")
      .pipe(
        // insert the discipline signal for getting the discipline values of the event
        tap((events) => {
          events.forEach((event, index) => {
            this.disciplineService.get(event.discipline).subscribe();
            events[index]["discipline$"] = this.disciplineService.discipline;
          })
        }),
        tap((events) => { this.events.set(events) }),
      );
  }
}
