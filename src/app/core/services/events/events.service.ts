import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IEvent } from '../../interfaces/event.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly apiUrl = environment.apiURL
  private readonly http = inject(HttpClient);
  events = signal<IEvent[]>([]);

  getAll(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.apiUrl + "events/")
      .pipe(
        tap((events) => { this.events.set(events) }),
      );
  }
}
