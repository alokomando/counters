import { Component, OnInit, Input } from '@angular/core';
import { CountersData } from '../../interfaces/counters.interface';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @Input() countersData: CountersData;

  constructor() { }

  ngOnInit() {
  }

}
