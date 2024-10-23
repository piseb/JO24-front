import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../../core/services/cart/cart.service';
import { IOffer } from '../../core/interfaces/offer.interface';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    }
    ).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getTotalPriceOffers do the math', () => {
    let offers: IOffer[] = [{
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
      count: 5
    }
    ]
    for (let x = 0; x < 10; x++) {
      cartService.add(offers[0])
    }
    for (let x = 0; x < 5; x++) {
      cartService.add(offers[1])
    }

    // 1999.99 * 10 + 3499.99 * 5 = 37499.85
    expect(component.getTotalPriceOffers()).toEqual(37499.85);
  });
});
