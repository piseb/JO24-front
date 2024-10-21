import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getAll(): { nom: string, url: string }[] {
    return [
      {
        nom: "Accueil",
        url: "home"
      },
      {
        nom: "Évènements",
        url: "events"
      },
    ];
  }
}
