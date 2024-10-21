import { isSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { DisciplinesService } from './disciplines.service';

describe('DisciplinesService', () => {
  let service: DisciplinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(DisciplinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should events be a signal', () => {
    const discipline = service.discipline;
    expect(isSignal(discipline)).toBeTrue();
  });
});
