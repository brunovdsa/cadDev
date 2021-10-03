import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { Developer } from '../developers/shared/interface/developer';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListDevsService {
  
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Developer[]>(`${API_PATH}devs`)
      .pipe(
        tap(console.log)
      )
  }
}
