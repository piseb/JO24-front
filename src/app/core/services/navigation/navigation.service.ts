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
      {
        nom: "Offres et Panier",
        url: "offers"
      },
      {
        nom: "Se connecter",
        url: "login"
      },
      {
        nom: "Déconnexion",
        url: "logout"
      },
    ];
  }
}
