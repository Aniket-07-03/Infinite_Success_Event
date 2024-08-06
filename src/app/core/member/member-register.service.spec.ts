import { TestBed } from '@angular/core/testing';

import { MemberRegisterService } from './member-register.service';

describe('MemberRegisterService', () => {
  let service: MemberRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
