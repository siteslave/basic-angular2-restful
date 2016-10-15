import { Component } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello world!';
  constructor() {
   console.log(moment().format('YYYY-MM-DD'))
  } 
}
