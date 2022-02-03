import { Component, OnInit } from '@angular/core';
import { CountersFacade } from './facades/counters-facade/counters.facade';
import { Counter } from './interfaces/counters.interface';

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

  onAddClicked(counter: Counter) {
    this.countersFacade.addCount(counter.id);
  }
}
