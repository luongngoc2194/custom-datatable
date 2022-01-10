import { Component } from '@angular/core';
import {cols, data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-table';
  cols = cols;
  data = data;
}
