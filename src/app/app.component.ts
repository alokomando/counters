import { Component, OnInit } from '@angular/core';
import { CountersFacade } from './facades/counters-facade/counters.facade';
import { CountChange } from './interfaces/add-clicked-data.interface';

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

  onCountChange(countChange: CountChange) {
    this.countersFacade.changeCount(countChange.counter.id, countChange.newCount);
  }
}
