import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Hometitle = 'welcome to the home page';
  author = 'Meriem';
  myString = "I like animes";
  myBoolean = true;
  alertMe(val:string){
    alert(val);
   }
   jujutsuKaisen = {
    name : "Gojo",
    belt : "LightPurple"
   };
 
}
