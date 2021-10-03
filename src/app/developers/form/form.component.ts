import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Developer } from '../shared/interface/developer';
import { ListDevsService } from 'src/app/service/list-devs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  devs: Developer[];

  form: FormGroup;

  constructor(
    private service: ListDevsService, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.configForm();
  }

  configForm(){
    this.form = this.formBuilder.group({
      avatar: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      city: [null, Validators.required],
      education: [null, Validators.required],
      technologies: [null, Validators.required],
      ghuser: [null, Validators.required]
    });
  }

  create(){
    this.service.register(this.form.value)
      .subscribe(response => {
        this.devs.push(response);

        this.form.reset();
      });
  }
}
