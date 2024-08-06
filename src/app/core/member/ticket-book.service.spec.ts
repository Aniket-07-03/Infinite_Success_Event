import { TestBed } from '@angular/core/testing';

import { TicketBookService } from './ticket-book.service';

describe('TicketBookService', () => {
  let service: TicketBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
