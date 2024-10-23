import { Component, inject, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CartService } from '../../core/services/cart/cart.service';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { IOffer } from '../../core/interfaces/offer.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatButton, MatTableModule, CurrencyPipe, MatIcon],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'count', 'priceQte', 'edit']; // for MatTable
  cartService = inject(CartService)
  cart = this.cartService.cart;

  // the MatTable cant use signal but an observable
  cart$ = toObservable(this.cart);
  ngOnInit() {
    this.cart$.subscribe();
  }

  isDataSource() {
    return !this.cartService.isEmpty();
  }

  // Total price is price by quantity for earch offer in the cart
  getTotalPriceOffers() {
    return this.cart().reduce((acc, offer) => acc + offer.price * offer.count!, 0);
  }

  add(offer: IOffer) { this.cartService.add(offer); }
  delete(offer: IOffer) { this.cartService.delete(offer); }
  remove(offer: IOffer) { this.cartService.remove(offer); }
  reset() { this.cartService.reset(); }
}
