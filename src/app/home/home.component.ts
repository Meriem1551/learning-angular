import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Hometitle = 'welcome to the home page';
  /*
 @Input() jujutsuKaisen :any;
 @Output() onYell = new EventEmitter();

 fireYellEvent(e:any){
  this.onYell.emit(e);
 }
  * 
    author = 'Meriem';
    myString = "I like animes";
    myBoolean = true;
    alertMe(val:string){
      alert(val);
    }
  */
    constructor(private logger: LoggingService){ }
    logIt(){
      this.logger.log()
    }
 
}
