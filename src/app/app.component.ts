import { Component } from '@angular/core';

//import {HomeComponent} from './home/home.component'
@Component({
  selector: 'app-root',//the tag which this componenet will replace
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  //directives: [HomeComponent]
})
export class AppComponent {
  title = 'app works!, woop woop';
  name = 'Meriem';
}
