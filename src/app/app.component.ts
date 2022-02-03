import { Component, OnInit } from '@angular/core';
import { AddClickedData } from './interfaces/add-clicked-data.interface';
import { CountersFacade } from './facades/counters-facade/counters.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'counters';
  count = 5;

  constructor(
    public countersFacade: CountersFacade,
  ) {}

  ngOnInit(): void {
  }

  onAddClicked(addClickedData: AddClickedData) {
    this.count = addClickedData.currentCount + 1;
  }
}
