import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountersData } from '../../interfaces/counters.interface';

@Injectable({
  providedIn: 'root'
})
export class CountersFacade {

  counters$: Observable<CountersData>;

  constructor() {
    this.counters$ = this.getCounters();
  }

  private getCounters(): Observable<CountersData> {
    return of({
      counters: [
        {
          title: 'Twitter',
          currentCount: 4,
        },
        {
          title: 'Instagram',
          currentCount: 8,
        },
      ],
    });
  }
}
