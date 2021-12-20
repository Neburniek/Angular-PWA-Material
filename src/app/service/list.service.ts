import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) {
    
   }

  getAll(): Observable<any>{
    return this.http.get<any>("https://amiiboapi.com/api/amiiboseries/")
  }

  getById(id:string): Observable<any>{
    return this.http.get<any>("https://amiiboapi.com/api/amiibo/?amiiboSeries="+ id)
  }
}
