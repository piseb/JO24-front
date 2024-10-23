import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { IOffer } from '../../interfaces/offer.interface';

describe('CartService', () => {
  let service: CartService;
  let offer_array: IOffer[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    offer_array = [{
      "uuid": "7554b08f-dd43-4254-b695-c97c545f95ab",
      "title": "solo",
      "description": "Ne restez pas seul(e) chez vous !",
      "price": 1999.99,
      "ntickets": 1,
      "disable": false,
    },
    {
      "uuid": "b25d6938-c096-4cb5-8f53-8cb16412dcab",
      "title": "duo",
      "description": "Invitez votre ami(e) !",
      "price": 3499.99,
      "ntickets": 2,
      "disable": false,
    },
    {
      "uuid": "e098f441-c675-499a-aa3a-847f8bc2da53",
      "title": "familiale",
      "description": "Venez en famille !",
      "price": 6456.99,
      "ntickets": 4,
      "disable": false,
    }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should: add an offer initialize the counter', () => {
    const cart = service.cart;
    expect(cart().length).toBe(0);
    // add a new offer
    service.add(offer_array[0]);
    expect(cart().length).toBe(1);
    // the offer must have the counter at 1
    const offer = { ...offer_array[0], count: 1 }
    expect(cart()[0]).toEqual(offer);
  });

  it('should: add an offer n times, increments the counter in the offer cart signal', () => {
    const cart = service.cart;
    expect(cart().length).toBe(0);
    const nadd = Math.floor(Math.random() * 10) + 1; // random 1..10
    for (let i = 0; i < nadd; i++) { // add the same offer nadd times
      service.add(offer_array[0]);
    }
    // cart() must have only 1 offer
    expect(cart().length).toBe(1);
    // only the counter is edited
    const offer = { ...offer_array[0], count: nadd }
    expect(cart()[0]).toEqual(offer);
  });

  it('should: remove in a "reverse" add', () => {
    // remove decrement the counter offer
    const cart = service.cart;
    expect(cart().length).toBe(0);
    const nadd = 20
    for (let i = 0; i < nadd; i++) { // add the same offer nadd times
      service.add(offer_array[0]);
    }
    const ndelete = Math.floor(Math.random() * 10) + 1; // random 1..10
    for (let i = 0; i < ndelete; i++) { // remove the same offer ndelete times
      service.remove(offer_array[0]);
    }
    // test the final value counter
    expect(cart()[0].count).toBe(nadd - ndelete);
  });

  it('should: delete an offer and the offer is not in cart value anymore', () => {
    const cart = service.cart;
    expect(cart().length).toBe(0);

    // add an offer
    service.add(offer_array[0]);
    // add another offer
    service.add(offer_array[1]);
    // add again the offer
    service.add(offer_array[1]);

    // delete the first offer
    expect(cart().length).toBe(2);
    service.delete(offer_array[1]);
    expect(cart().length).toBe(1);

    // remove an offer not in cart() has no effect
    service.delete(offer_array[1]);
    expect(cart().length).toBe(1);

    // delete the second and last offer
    service.delete(offer_array[0]);
    expect(cart().length).toBe(0);
  });

  it('should: isEmpty if empty or not', () => {
    const cart = service.cart;
    expect(cart().length).toBe(0);
    // empty at start
    expect(service.isEmpty()).toBe(true);

    service.add(offer_array[0]);
    // not empty anymore
    expect(service.isEmpty()).toBe(false);

    service.remove(offer_array[0]);
    // empty again
    expect(service.isEmpty()).toBe(true);
  });
});
