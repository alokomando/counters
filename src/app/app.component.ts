import { Component } from '@angular/core';
import { AddClickedData } from './interfaces/add-clicked-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counters';
  count = 5;

  onAddClicked(addClickedData: AddClickedData) {
    this.count = addClickedData.currentCount + 1;
  }
}
