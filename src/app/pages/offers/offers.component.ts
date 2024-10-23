import { Component, inject, OnInit } from '@angular/core';
import { OffersService } from '../../core/services/offers/offers.service';
import { CardComponent } from '../../features/offers/card/card.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  private readonly offersService = inject(OffersService)
  // we want the enable offers only
  offers = this.offersService.offersEnable

  ngOnInit() {
    this.offersService.getAllEnable().subscribe();
  }
}