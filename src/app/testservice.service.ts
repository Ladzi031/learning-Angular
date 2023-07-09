import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StrangePeople } from 'src/interfaces/StrangePeople';
import { Observable } from 'rxjs';
import { catchError, map } from  "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class TestserviceService {
  public url = "/assets/strangePeople.json";

  // DI with typeScript shortcut....
  constructor(private http: HttpClient) {}

  getPeople(): Observable<StrangePeople[]> {
    return this.http.get<StrangePeople[]>(this.url).pipe( 
      map( (data) => {
        return data
      }),
      catchError( (error: HttpErrorResponse) => {
         return throwError(() => new Error() || "Server Error");
        }));
  }  
}
