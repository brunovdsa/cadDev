import { TestBed } from '@angular/core/testing';

import { ListDevsService } from './list-devs.service';

describe('ListDevsService', () => {
  let service: ListDevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDevsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
