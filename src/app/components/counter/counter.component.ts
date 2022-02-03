import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountChangeData } from '../../interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() minLimit: number = null;
  @Input() maxLimit: number = null;

  @Output() addClicked = new EventEmitter<CountChangeData>();
  @Output() subtractClicked = new EventEmitter<CountChangeData>();
  @Output() clearClicked = new EventEmitter<CountChangeData>();

  
  constructor() { }

  ngOnInit() {
  }

  onAddOneClicked() {

    if(this.maxLimit !== null && this.count >= this.maxLimit) return;

    this.addClicked.emit({ currentCount: this.count });
  }

  onSubtractOneClicked() {
    if(this.minLimit !== null && this.count <= this.minLimit) return;

    this.subtractClicked.emit({ currentCount: this.count });
  }

  onClearClicked() {
    this.clearClicked.emit({ currentCount: this.count });
  }
}
