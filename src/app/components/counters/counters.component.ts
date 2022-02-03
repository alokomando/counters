import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountersData } from '../../interfaces/counters.interface';
import { AddClickedData } from '../../interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @Input() countersData: CountersData;

  @Output() addClicked = new EventEmitter<AddClickedData>();


  constructor() { }

  ngOnInit() {
  }

  onAddClicked(counterIndex: number) {
    this.addClicked.emit(this.countersData.counters[counterIndex]);
  }
}
