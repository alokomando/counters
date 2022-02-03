import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddClickedData } from '../../interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() title: string = '';
  @Input() count: number = 0;

  @Output() addClicked = new EventEmitter<AddClickedData>();
  constructor() { }

  ngOnInit() {
  }

  onAddOneClicked() {
    this.addClicked.emit({ currentCount: this.count });
  }
}
