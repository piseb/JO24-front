import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IOffer } from '../../interfaces/offer.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private readonly apiUrl = environment.apiURL
  private readonly http = inject(HttpClient);
  offers = signal<IOffer[]>([]);
  offersEnable = signal<IOffer[]>([]);

  getAll(): Observable<IOffer[]> {
    return this.http.get<IOffer[]>(this.apiUrl + "offers/")
      .pipe(
        tap((offers) => { this.offers.set(offers) }),
      );
  }

  getAllEnable(): Observable<IOffer[]> {
    return this.http.get<IOffer[]>(this.apiUrl + "offers/enable/")
      .pipe(
        tap((offers) => { this.offersEnable.set(offers) }),
      );
  }
}
