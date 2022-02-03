import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountersData } from '../../interfaces/counters.interface';
import { AddClickedData, CountChange } from '../../interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @Input() countersData: CountersData;

  @Output() onCountChange = new EventEmitter<CountChange>();


  constructor() { }

  ngOnInit() {
  }

  onAddClicked(addClickedData: AddClickedData, counterIndex: number) {
    this.onCountChange.emit({
      counter: this.countersData.counters[counterIndex],
      newCount: addClickedData.currentCount + 1,
    });
  }
}
