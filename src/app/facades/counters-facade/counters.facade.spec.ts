/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountersFacade } from './counters.facade';

describe('Service: Counters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountersFacade]
    });
  });

  it('should ...', inject([CountersFacade], (service: CountersFacade) => {
    expect(service).toBeTruthy();
  }));
});
