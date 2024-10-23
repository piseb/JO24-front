import { effect, Injectable, signal } from '@angular/core';
import { IOffer } from '../../interfaces/offer.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // the value of cart signal (signal()) is an array of "offer"

  // initialize with existing data in the local storage if there is
  // else with an empty array
  cart = signal<IOffer[]>(JSON.parse(localStorage.getItem('cart') ?? '[]'));

  constructor() {
    effect(() => {
      // sync the Local Storage in side effect
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    });
  }

  /**
   * Add an offer to the cart signal.
   *
   * initialize the offer counter to 1
   * or
   * increment the counter if the offer is already in the cart signal
   */
  add(offer: IOffer): void {
    // slice() for get a new reference or any change is not detected
    const cart = this.cart().slice()
    const index = cart.findIndex((cartOffer) => cartOffer.uuid == offer.uuid)
    if (index < 0) {
      // insert a new offer
      this.cart.update(offers => [...offers, { ...offer, count: 1 }])
    } else {
      // else or use the counter
      if (cart[index].count) {
        cart[index].count++;
      } else {
        // or initialize to 1
        cart[index].count = 1;
      }
      this.cart.set(cart);
    }
  }

  /**
   * Remove an offer to the cart signal.
   *
   * decrement the offer counter to 1
   * or
   * remove the offer if the counter is below 1
   */
  remove(offer: IOffer): void {
    const cart = this.cart().slice()
    const index = cart.findIndex((cartOffer) => cartOffer.uuid == offer.uuid)
    if (index >= 0) {
      cart[index].count!--;
      if (cart[index].count! < 1) {
        cart.splice(index, 1);
      }
    }
    this.cart.set(cart);
  }

  /**
   * Delete an offer in the cart signal.
   */
  delete(offer: IOffer): void {
    if (!this.isEmpty()) {
      let cart = this.cart().slice();
      cart = cart.filter(cartOffer => (cartOffer.uuid != offer.uuid));
      this.cart.set(cart);
    }
  }

  /**
   * Return if the cart signal is empty or not.
   */
  isEmpty(): boolean {
    if (this.cart().length > 0) {
      return false;
    }
    return true;
  }

  /**
   * Reset the cart signal to an empty array.
   */
  reset(): void {
    this.cart.set([]);
  }
}
