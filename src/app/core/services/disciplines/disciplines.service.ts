import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development-local';
import { IDiscipline } from '../../interfaces/discipline.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplinesService {
  private readonly apiUrl = environment.apiURL
  private readonly http = inject(HttpClient);
  discipline = signal<IDiscipline>({} as IDiscipline);
  disciplines = signal<IDiscipline[]>([]);

  get(id: string): Observable<IDiscipline> {
    return this.http.get<IDiscipline>(this.apiUrl + "disciplines/" + id + "/")
      .pipe(
        tap((discipline) => { this.discipline.set(discipline) }),
      );
  }

  getAll(): Observable<IDiscipline[]> {
    return this.http.get<IDiscipline[]>(this.apiUrl + "disciplines/")
      .pipe(
        tap((disciplines) => { this.disciplines.set(disciplines) }),
      );
  }
}
