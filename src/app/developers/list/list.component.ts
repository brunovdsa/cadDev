import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable} from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

import { ListDevsService } from 'src/app/service/list-devs.service';
import { API_PATH } from 'src/environments/environment';
import { Developer } from '../shared/interface/developer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  queryField = new FormControl('');
  devs: Developer[];
  devsApi$: Observable<any>;

  constructor(private service: ListDevsService, private http: HttpClient) { }


  ngOnInit() {  
   this.service.list()
    .subscribe(dados => this.devs = dados)
   
   let value = this.queryField.valueChanges;    
   this.devsApi$ = value
    .pipe(
      map(value => value.trim()),
      filter(value => value.length >= 2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.http.get(`${API_PATH}devs?q=${value}`)),
      map((res: any) => res)
    )
  }
}
