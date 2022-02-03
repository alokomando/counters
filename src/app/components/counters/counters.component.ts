import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountersData } from '../../interfaces/counters.interface';
import { CountChangeData, MultipleCountsChange, CountChange } from '../../interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @Input() countersData: CountersData;

  @Output() onCountChange = new EventEmitter<MultipleCountsChange>();


  constructor() { }

  ngOnInit() {
  }

  onAddClicked(countChangeData: CountChangeData, counterIndex: number) {
    this.onCountChange.emit({
      countersToChange: [
        {
          counter: this.countersData.counters[counterIndex],
          newCount: countChangeData.currentCount + 1,
        },
      ],
    });
  }

  onSubtractClicked(countChangeData: CountChangeData, counterIndex: number) {
    this.onCountChange.emit({
      countersToChange: [
        {
          counter: this.countersData.counters[counterIndex],
          newCount: countChangeData.currentCount - 1,
        },
      ],
    });
  }

  onClearClicked(countChangeData: CountChangeData, counterIndex: number) {
    this.onCountChange.emit({
      countersToChange: [
        {
          counter: this.countersData.counters[counterIndex],
          newCount: 0,
        },
      ],
    });
  }

  onClearAllCLicked() {
    const allCountsToClear: CountChange[] = this.countersData.counters.map(counter => {
      return {
        counter,
        newCount: 0,
      }
    });

    this.onCountChange.emit({
      countersToChange: allCountsToClear,
    });
  }
}
