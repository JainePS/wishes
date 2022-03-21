import { TestBed } from '@angular/core/testing';

import { WishesService } from './wishes.service';

describe('WishesService', () => {
  let service: WishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
