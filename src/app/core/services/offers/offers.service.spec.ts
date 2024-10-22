import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { OffersService } from './offers.service';

describe('OffersService', () => {
  let service: OffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(OffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
