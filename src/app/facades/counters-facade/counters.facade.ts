import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { CountersData, Counter, CountersState } from '../../interfaces/counters.interface';

@Injectable({
  providedIn: 'root'
})
export class CountersFacade {

  private countersState: CountersState = {
    counters: {
      counter1: {
        id: 'counter1',
        title: 'Twitter',
        currentCount: 4,
      },
      counter2: {
        id: 'counter2',
        title: 'Instagram',
        currentCount: 8,
      },
    },
  };
  private countersStore$ = new BehaviorSubject<CountersState>(null);

  counters$: Observable<CountersData>;

  constructor() {
    this.counters$ = this.getCounters();
    this.countersStore$.next(this.countersState);
  }

  private getCounters(): Observable<CountersData> {
    return this.countersStore$.pipe(
      map(countersState => {
        return {
          counters: Object.values(countersState.counters),
        }
      })
    );
  }

  addCount(counterId: string) {
    this.countersStore$.pipe(
      take(1),
      tap(currentState => {
        const counterToAdd = currentState.counters[counterId];
        
        if(!counterToAdd) {
          this.countersStore$.next(currentState);
          return;
        }

        this.countersStore$.next({
          ...currentState,
          counters: {
            ...currentState.counters,
            [counterId]: {
              ...counterToAdd,
              currentCount: counterToAdd.currentCount + 1,
            }
          }
        })
      }),
    ).subscribe();
  }
}
