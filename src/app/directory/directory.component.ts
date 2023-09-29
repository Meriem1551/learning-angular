import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

//declare var firebase: any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit{
 /*classes = {'blue': true, 'red':false, 'underline':true};
 test = true;
  jujutsu: string;
  constructor(private route: ActivatedRoute) { 
    this.jujutsu = route.snapshot.params['jujutsu'];
  } */

  /*ninjas = [
    {name: "Yoshi", belt: "black"},
    {name: "Ryu", belt: "red"},
    {name: "Crystal", belt: "purple"}
  ];*/

ninjas = [];
bool = null;
  term : string = '';

  remove(e:any){
    console.log('removed')
  };

  constructor(private logger: LoggingService, private dataService: DataService){}
logIt(){
  this.logger.log();
}

ngOnInit(){
    this.dataService.fetchData().subscribe(
      (data: any) => {
        this.ninjas = data
      },
    );
    //this.fbGetData();
}

 /*fbGetData(){
  firebase.database().ref('/').on('child_added', (snapshot:any) => {
    console.log(snapshot)
  });

 }*/

}
