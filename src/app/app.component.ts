import { Component, OnInit } from '@angular/core';
import { CountersFacade } from './facades/counters-facade/counters.facade';
import { MultipleCountsChange } from './interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    public countersFacade: CountersFacade,
  ) {}

  ngOnInit(): void {
  }

  onCountChange(countsChange: MultipleCountsChange) {
    const countsToChange = countsChange.countersToChange.map(counterToChange => ({
      counterId: counterToChange.counter.id,
      newCount: counterToChange.newCount
    }));

    this.countersFacade.changeCounts(countsToChange);
  }
}
