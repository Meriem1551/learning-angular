import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

   fetchData(): Observable<any>{
    return  this.httpClient.get('https://nn-angular-4c847-default-rtdb.firebaseio.com/.json').pipe(
      map((res :any) => {
         return res; 
      }
     ))
   };
   
  }

