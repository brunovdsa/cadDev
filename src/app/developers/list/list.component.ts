import { Component, OnInit } from '@angular/core';
import { ListDevsService } from 'src/app/service/list-devs.service';
import { Developer } from '../shared/interface/developer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  devs: Developer[];

  constructor(private service: ListDevsService) {}


  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.devs = dados)
  }

}
