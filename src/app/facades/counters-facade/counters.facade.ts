import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { CountersData, CountersState, Counter } from '../../interfaces/counters.interface';
import { CountersInitialState } from '../../state/initial-state.config';

const browserStorage = localStorage;
const countsKeyForBrowserStorage = 'alon-counts';

@Injectable({
  providedIn: 'root'
})
export class CountersFacade {

  private countersState: CountersState;
  private countersStore$ = new BehaviorSubject<CountersState>(null);

  counters$: Observable<CountersData>;

  constructor() {
    this.initState();
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

  private initState() {
    this.countersState = {...CountersInitialState};

    const countsFromBrowserStorage = browserStorage.getItem(countsKeyForBrowserStorage);
    const countsFromBrowserStorageObj: Record<string, number> = JSON.parse(countsFromBrowserStorage);
    
    for(let counterId in countsFromBrowserStorageObj) {
      const countFromBrowserStorage = countsFromBrowserStorageObj[counterId];
      this.countersState.counters[counterId].currentCount = countFromBrowserStorage;
    }
  }
  
  changeCounts(countsToChange: {counterId: string, newCount: number}[]) {
    this.countersStore$.pipe(
      take(1),
      tap(currentState => {

        const countersToAdd: Record<string, Counter> = {};
        
        countsToChange.forEach(countToChange => {
          const { counterId, newCount } = countToChange;
          countersToAdd[counterId] = {
            ...currentState.counters[counterId],
            currentCount: newCount,
          };
        })
        
        if(Object.keys(countersToAdd || {}).length === 0) {
          this.countersStore$.next(currentState);
          return;
        }

        const newState: CountersState = {
          ...currentState,
          counters: {
            ...currentState.counters,
            ...countersToAdd,
          }
        };
        this.countersStore$.next(newState);

        const counts: Record<string, number> = {};
        for(let counterId in newState.counters) {
          counts[counterId] = newState.counters[counterId].currentCount;
        }

        const stringifiedCounts = JSON.stringify(counts);
        browserStorage.setItem(countsKeyForBrowserStorage, stringifiedCounts);
      }),
    ).subscribe();
  }
}
